import { http_get, http_delete, http_patch } from '../services';

export const httpGet = async (param, setState, state) => {
  try {
    const request = await http_get(param);
    const { data, status } = request;

    if (status === 200) {
      setState(data);
    } else {
      console.log(request);
    }
  } catch (err) {
    console.log(err);
  }
};

/// API ile ilgili DELETE ve PATCH request'lerde sorun var sanırım, o yüzden bu şekilde bıraktım

export const httpDelete = async (id) => {
  try {
    const request = await http_delete(`/todos/${id}`);
    const { data, status } = request;

    if (status === 200) {
      // console.log(request)
    } else {
      console.log(request);
    }
  } catch (err) {
    console.log(err);
  }
};

export const httpPatch = async (id, state) => {
  try {
    const request = await http_patch(`/todos/${id}`, {
      data: {
        completed: state?.completed,
        title: state?.title,
      },
    });
    const { data, status } = request;

    if (status === 200) {
      // console.log(request)
    } else {
      console.log(request);
    }
  } catch (err) {
    console.log(err);
  }
};