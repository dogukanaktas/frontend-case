import { http_get } from '../services'

export const generatePagination = (data, pageSize, pageNumber) => {
  try {
    const items = []
    let pageCount = Math.ceil(data.length / pageSize)
    if (pageCount < 2) return []

    let counter = 0
    let startCount = 1

    if (pageNumber >= 3) startCount = pageNumber - 2
    if (pageCount >= 5 && pageCount - startCount < 5) startCount = pageCount - 4

    for (let i = startCount; i < pageCount + 1; i++) {
      if (counter >= 5) break

      items.push(i)
      counter++
    }
    return items
  } catch (error) {
    return []
  }
}

export const httpGet = async (param, setState, state) => {
  try {
    const request = await http_get(param);
    const {data, status} = request;

    if(status === 200 ) {
      setState(data)
    } else {
      console.log(request)
    }

  } catch (err) {
    console.log(err)
  }
}
