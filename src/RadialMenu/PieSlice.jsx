import React from "react";

const PieSlice = ({
    degree,
    color,
    startAngle,
    size,
    gap,
    strokeColor,
    onClick,
    hoverEffect,
    label,
    labelColor,
    labelRadius,
    fontSize = 12,
    fontFamily = "Arial",
    charWidthFactor = 0.6, // Approximate width factor for characters (adjust as needed)
}) => {
    if (degree <= 0) return null;

    // Estimate the width of each character based on fontSize and charWidthFactor
    const estimatedCharWidth = fontSize * charWidthFactor;

    // Handle 360° as a special case (full circle)
    if (degree >= 360) {
        return (
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                style={{ display: "block" }}
            >
                <g
                    onClick={onClick}
                    style={{
                        transformOrigin: `${size / 2}px ${size / 2}px`,
                        transition: "transform 0.2s ease-in-out",
                    }}
                    {...(hoverEffect && {
                        onMouseEnter: (e) => {
                            e.currentTarget.setAttribute("transform", `scale(1.05)`);
                        },
                        onMouseLeave: (e) => {
                            e.currentTarget.removeAttribute("transform");
                        },
                    })}
                >
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={size / 2 - gap / 2}
                        fill={color}
                        stroke={strokeColor}
                        strokeWidth={gap}
                    />
                    {label && (
                        <text
                            x={size / 2}
                            y={size / 2}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill={labelColor}
                            fontSize={fontSize}
                            fontFamily={fontFamily}
                        >
                            {label}
                        </text>
                    )}
                </g>
            </svg>
        );
    }

    // Convert degree and startAngle to radians
    const radians = (degree * Math.PI) / 180;
    const startRadians = (startAngle * Math.PI) / 180;
    const radius = size / 2 - gap / 2;
    const outerRadius = size / 2;
    const labelRadiusValue = (outerRadius * labelRadius) / 100;

    // Calculate the start and end points of the slice
    const x1 = size / 2 + radius * Math.sin(startRadians);
    const y1 = size / 2 - radius * Math.cos(startRadians);
    const x2 = size / 2 + radius * Math.sin(startRadians + radians);
    const y2 = size / 2 - radius * Math.cos(startRadians + radians);

    // Determine if the arc should be large or small
    const largeArcFlag = degree > 180 ? 1 : 0;

    // Construct the path data
    const pathData = `M${size / 2},${size / 2} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;

    // Function to render text along an arc, centered with dynamic character spacing
    const renderArcText = () => {
        if (!label) return null;

        const characters = label.split("");
        const charCount = characters.length;

        // Calculate the angular width for each character based on its estimated pixel width
        const charAngleWidth = 2 * Math.asin(estimatedCharWidth / (2 * labelRadiusValue));

        // Calculate the total angular width for the label
        const totalTextAngle = charAngleWidth * (charCount - 1);

        // Start the text in the middle of the arc and move backward by half the total text width
        let currentAngle = startRadians + radians / 2 - totalTextAngle / 2;

        return characters.map((char, index) => {
            const charAngle = currentAngle + charAngleWidth * index;
            const charX = size / 2 + labelRadiusValue * Math.sin(charAngle);
            const charY = size / 2 - labelRadiusValue * Math.cos(charAngle);

            // Rotate the character to follow the arc
            const charRotation = (charAngle * 180) / Math.PI;

            return (
                <text
                    key={index}
                    x={charX}
                    y={charY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={labelColor}
                    fontSize={fontSize}
                    fontFamily={fontFamily}
                    transform={`rotate(${charRotation}, ${charX}, ${charY})`}
                >
                    {char}
                </text>
            );
        });
    };

    return (
        <svg
            width={size}
            height={size}
            viewBox={`-5 -5 ${size + 10} ${size + 10}`}
            style={{ display: "block" }}
        >
            <g
                onClick={onClick}
                style={{
                    transformOrigin: `${size / 2}px ${size / 2}px`,
                    transition: "transform 0.2s ease-in-out",
                }}
                {...(hoverEffect && {
                    onMouseEnter: (e) => {
                        e.currentTarget.setAttribute("transform", `scale(1.05)`);
                    },
                    onMouseLeave: (e) => {
                        e.currentTarget.removeAttribute("transform");
                    },
                })}
            >
                <path
                    d={pathData}
                    fill={color}
                    stroke={strokeColor}
                    strokeWidth={gap}
                />
                {/* Render text along the arc, centered with dynamic character spacing */}
                {renderArcText()}
            </g>
        </svg>
    );
};

export default PieSlice;