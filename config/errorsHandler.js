const handlerError = (err) => {
	const errors = {}

Object.values(err.errors).forEach((data) => {
         // console.log(data.properties.message)
      errors[data.properties.path] = data.properties.message
      })
      return errors
}
module.exports = {handlerError}