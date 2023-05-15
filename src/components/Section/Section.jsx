
const Section = ({title,children}) => {
    return (
        <>
            {title && <h3>{title}</h3>}
            {children}
        </>        
    )
}
export default Section;