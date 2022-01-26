export default (req, res) => {
    res.statusConde = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'Hello there, I\'m your API' }))
}