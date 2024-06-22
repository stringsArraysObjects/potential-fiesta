
const navLinks = [{title:'Home', id: "home", link: 'index.html'},
                 {title: 'Page 1', id: "page1", link: 'placeholderPage1.html'},
                 {title: 'Page 2', id: "page2", link: 'placeholderPage2.html'},
                 {title: 'About', id: "about", link:'about.html'}];

export default function Nav(){
const navItems = navLinks.map(link =>

        <li key={link.id}><a href={link.link}>{link.title}</a></li>
    );

    return (
        <ul>{navItems}</ul>
        
    );
}
