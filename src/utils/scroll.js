export function handleScroll(activeSectionSetter) {
    const sections = [
        { id: 'home', className: 'home'},
        { id: 'about', className: 'about'},
        { id: 'service', className: 'service'},
        { id: 'portfolio', className: 'portfolio'},
        { id: 'price', className: 'price'},
        { id: 'feedback', className: 'feedback'},
        { id: 'contact', className: 'contact'},
    ];

    let currentSection = '';

    for (const section of sections) {
        const targetElement = document.getElementById(section.id);
        if (targetElement) {
            const { top } = targetElement.getBoundingClientRect();
            if (top <= 120) {
                currentSection = section.className;
            }
        }
    }

    activeSectionSetter(currentSection);
}