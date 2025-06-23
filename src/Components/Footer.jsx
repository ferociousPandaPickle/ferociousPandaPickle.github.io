
function Footer(){
    const year = new Date().getFullYear();
    return(
        <>
            <div className="bot-footer">
                <p>© {year} — Created & Designed by Pranav Kadiyam, Background GIF from Pinterest</p>
            </div>
        </>
    )
}
export default Footer