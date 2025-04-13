export interface IGetOTP {
  data: {
    email: string
  }
}

export interface IVerifyOTP {
  data: {
    email: string;
    otp: string
  }
}

export interface ISetupProfile {
  data: any
}