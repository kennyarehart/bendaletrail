import { useEffect } from 'react'

const useScript = url => {
	return new Promise((resolve, reject) => {
		useEffect(() => {
			const script = document.createElement('script')

			script.src = url
			script.async = true
			script.onload = e => {
				console.log(e)
				resolve()
				document.body.removeChild(script)
			}

			document.body.appendChild(script)
		}, [url])
	})
}

export default useScript
