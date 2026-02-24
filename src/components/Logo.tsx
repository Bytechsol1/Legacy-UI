import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
    className,
    size = 'md',
    showTagline = true
}) => {
    const sizeClasses = {
        sm: 'h-8',
        md: 'h-12',
        lg: 'h-24',
        xl: 'h-32'
    };

    return (
        <div className={cn("flex flex-col items-center justify-center", className)}>
            <svg
                viewBox="0 0 200 120"
                className={cn(sizeClasses[size], "w-auto drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]")}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#BF953F" />
                        <stop offset="25%" stopColor="#FCF6BA" />
                        <stop offset="50%" stopColor="#B38728" />
                        <stop offset="75%" stopColor="#FBF5B7" />
                        <stop offset="100%" stopColor="#AA771C" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* ── Crown ── */}
                <g transform="translate(100, 30)">
                    {/* Star Top */}
                    <path d="M0,-12 L2.5,-4.5 L10,-4.5 L4,0 L6,8 L0,3 L-6,8 L-4,0 L-10,-4.5 L-2.5,-4.5 Z" fill="url(#goldGradient)" filter="url(#glow)" />

                    {/* Main Crown Body */}
                    <path d="M-30,15 L-25,-5 L-12,8 L0,-12 L12,8 L25,-5 L30,15 Z" fill="url(#goldGradient)" />

                    {/* Crown Base */}
                    <rect x="-30" y="15" width="60" height="8" rx="2" fill="url(#goldGradient)" stroke="#8A6D3B" strokeWidth="0.5" />
                    <rect x="-30" y="23" width="60" height="3" rx="1" fill="#AA771C" />

                    {/* Laurels */}
                    <g opacity="0.8">
                        {/* Left Laurel */}
                        <path d="M-35,20 Q-50,0 -30,-5 Q-35,10 -25,18" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
                        <circle cx="-42" cy="8" r="1.5" fill="url(#goldGradient)" />
                        <circle cx="-45" cy="14" r="1.5" fill="url(#goldGradient)" />
                        <circle cx="-38" cy="3" r="1.5" fill="url(#goldGradient)" />

                        {/* Right Laurel */}
                        <path d="M35,20 Q50,0 30,-5 Q35,10 25,18" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
                        <circle cx="42" cy="8" r="1.5" fill="url(#goldGradient)" />
                        <circle cx="45" cy="14" r="1.5" fill="url(#goldGradient)" />
                        <circle cx="38" cy="3" r="1.5" fill="url(#goldGradient)" />
                    </g>
                </g>

                {/* ── LEGACY Text ── */}
                <text
                    x="100" y="85"
                    textAnchor="middle"
                    fontFamily="'Playfair Display', serif"
                    fontWeight="900"
                    fontSize="36"
                    fill="url(#goldGradient)"
                    letterSpacing="4"
                    className="uppercase"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                >LEGACY</text>

                {/* ── CASINO with lines ── */}
                <g transform="translate(100, 105)">
                    <text
                        x="0" y="0"
                        textAnchor="middle"
                        fontFamily="'Playfair Display', serif"
                        fontWeight="600"
                        fontSize="18"
                        fill="url(#goldGradient)"
                        letterSpacing="8"
                        className="uppercase"
                    >CASINO</text>

                    {/* Decorative lines */}
                    <path d="M-90,-6 L-45,-6" stroke="url(#goldGradient)" strokeWidth="0.5" opacity="0.6" />
                    <path d="M90,-6 L45,-6" stroke="url(#goldGradient)" strokeWidth="0.5" opacity="0.6" />
                </g>

                {/* ── Tagline ── */}
                {showTagline && (
                    <text
                        x="100" y="125"
                        textAnchor="middle"
                        fontFamily="'Georgia', serif"
                        fontStyle="italic"
                        fontWeight="400"
                        fontSize="14"
                        fill="url(#goldGradient)"
                        opacity="0.9"
                        letterSpacing="1"
                    >Legacy, Perfected.</text>
                )}
            </svg>
        </div>
    );
};
