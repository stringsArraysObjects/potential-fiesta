
const navLinks = [{title:'Home', id: "home", link: 'index.html'},
                 {title: 'Page 1', id: "page1", link: 'nested/placeholderPage1.html'},
                 {title: 'Page 2', id: "page2", link: 'nested/placeholderPage2.html'},
                 {title: 'About', id: "about", link:'nested/about.html'}];

export default function Nav(){
const navItems = navLinks.map(link =>

        <li key={link.id}><a href={link.link}>{link.title}</a></li>
    );

    return (
        <ul>{navItems}</ul>
        
    );
}
