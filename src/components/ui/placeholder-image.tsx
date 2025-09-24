interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
}

export function PlaceholderImage({ 
  width, 
  height, 
  text = "Image", 
  className 
}: PlaceholderImageProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill="#f3f4f6" />
      <rect 
        x={width * 0.25} 
        y={height * 0.25} 
        width={width * 0.5} 
        height={height * 0.5} 
        fill="#d1d5db" 
      />
      <text
        x={width / 2}
        y={height / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-gray-500 text-sm font-medium"
      >
        {text}
      </text>
    </svg>
  )
}