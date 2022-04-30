export default ({ redirect }) => {
    console.log("middleware auth")

    const loggedIn = true

    if (!loggedIn) {
        return redirect('/')
    }
}