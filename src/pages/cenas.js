useEffect(() => {
    async function authorize() {
      if (localStorage.getItem("token")) {
        const res = await fetch("/api/posts", {
          method: "GET",
          headers: {
            "authorization": localStorage.getItem("token")
          }
        })

        if (res.status === 200) {
          console.log("NICE")
        } else {
          console.log("NOT NICE")
        }
      }
    }
    authorize()
  }, [])