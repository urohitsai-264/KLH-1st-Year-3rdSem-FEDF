import { useState, useEffect } from "react";
function useWindowSize() {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    useEffect(() => {
        const handler = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);
    return size;
}

export default function ResponsiveLayout() {
    const size = useWindowSize();
    return (
        <div>
            <h1>Responsive Layout</h1>
            <p>Width: {size.width}px</p>
            <p>Height: {size.height}px</p>
        </div>
    );
}