import React from 'react';
import {Text} from "@/components/ui/text";

interface SectionBoilerplateProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

const SectionBoilerplate = ({
    title,
    subtitle,
    children,
                            } : SectionBoilerplateProps) => {
    return (
        <section
            id={title}
            key={title}
            className="w-full flex flex-col my-10"
        >
            <div className="flex flex-col items-center justify-center mb-5">
                <Text
                    variant="smallText"
                    className="text-primary uppercase"
                >
                    {title}
                </Text>
                <Text variant="h2">
                    {subtitle}
                </Text>
            </div>
            {children}
        </section>
    );
};

export { SectionBoilerplate };