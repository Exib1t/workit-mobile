class ApiStatuses {
  static get initialStatus() {
    return {
      loading: false,
      loaded: false,
      fail: false,
    };
  }

  static get requestStatus() {
    return {
      loading: true,
      loaded: false,
      fail: false,
    };
  }

  static get successStatus() {
    return {
      loading: false,
      loaded: true,
      fail: false,
    };
  }

  static get failStatus() {
    return {
      loading: false,
      loaded: false,
      fail: true,
    };
  }
}

export default ApiStatuses;
