
document.onreadystatechange = () => {
    if (document.readyState === "loading") {
         Loading()
    }
    if(document.readyState === "complete"){
        document.querySelector('.pageLoading').remove()
    }
}

export const Loading = () => (
    <>
    <div className="pageLoading">Loading...</div>
    </>

)

// export default Loading