// @/components/CameraStream.tsx (新しいファイル)

"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image'; // Next.jsを使っているなら <Image>タグが推奨されます

const CAMERA_BASE_URL = "http://10.0.0.2:8080/06EC4905-18B6-4AEB-BA3A-AB1373F3384A.jpg?rand=";

interface CameraStreamProps {
    className: string; // styles.cameraImage を受け取る
    alt: string;
}

export default function CameraStream({ className, alt }: CameraStreamProps) {
    const [cameraSrc, setCameraSrc] = useState<string | null>(null);

    useEffect(() => {
        const updateInterval = 100; 

        const intervalId = setInterval(() => {
            const newSrc = CAMERA_BASE_URL + Date.now();
            setCameraSrc(newSrc);
        }, updateInterval); // ここで 100ms が適用されます

        return () => clearInterval(intervalId);
    }, []);

    const finalSrc = cameraSrc ?? undefined;

    return (
        <img
            src={finalSrc} 
            alt={alt}
            className={className}
            onError={(e) => { 
                e.currentTarget.onerror = null; 
                e.currentTarget.src = "/images/chicken.jpg"; 
            }}
        />
    );
}