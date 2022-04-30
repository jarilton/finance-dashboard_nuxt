export default ({ redirect }) => {
    console.log("middleware auth")

    const loggedIn = false

    if (!loggedIn) {
        return redirect('/')
    }
}