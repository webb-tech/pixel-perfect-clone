interface BreadcrumbsProps {
    currentPage: string;
    links: Array<{ label: string; href: string }>;
}

export const Breadcrumbs = ({ currentPage, links }: BreadcrumbsProps) => {
    return (
        <div className="flex gap-2 text-sm">
            {links.map((link, i) => (
                <div key={i}>
                    <a href={link.href} className="flex gap-2">
                        <span>{link.label}</span>
                        <span>/</span>
                    </a>
                </div>
            ))}
            <div>
                <span>{currentPage}</span>
            </div>
        </div>
    );
};
