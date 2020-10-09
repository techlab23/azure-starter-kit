import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ActionContext } from 'vuex';

class AzureFunctions {
  
    public axios: AxiosInstance;
    public context!: ActionContext<any, any>;
    constructor() {
      const config = {
        baseURL: '/api/',
        timeout: 20000,
        withCredentials: true
      } as AxiosRequestConfig;
  
      if ((window as any).webpackHotUpdate) {
        config.timeout = 60000; // longer timeout for debugging
      }
      this.axios = Axios.create(config);
    }
  }
  
  export const apiFunctions = new AzureFunctions();