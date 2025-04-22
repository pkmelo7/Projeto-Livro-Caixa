// components/Card.tsx
import './Card.css';

type CardProps = {
    readonly title: string;
    readonly imageUrl: string;
    readonly description: string;
    readonly link: string;
};

export function Card({ title, imageUrl, description, link }: CardProps) {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <a href={link} className="card-link">Saiba mais</a>
        </div>
    );
}