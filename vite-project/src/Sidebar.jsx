let items = ['1', '2', '3', '4', '5'];

export default function Sidebar(){
    const sidebarItems = items.map(item =>
        <p>{item} Lorem ipsum dolor sit amet, consectetur adipisic</p>
    );
    return (
       <section>{sidebarItems}</section>
    ) 
    
}