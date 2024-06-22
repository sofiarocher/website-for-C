export interface CardCourseProps {
    img: string;
    title: string;
    infoLink?: string;
    target?: string;
}

export interface CounterProps {
    target: number;
    label: string;
}

export interface CourseInfoProps {
    imgInfo: string;
    altInfo: string;
    title: string;
    description: string;
    price: string;
    buyLink: string;
}

export interface HeroProps {
    videoSrc: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

export interface VideoProps {
    title: string;
    video: string;
}
