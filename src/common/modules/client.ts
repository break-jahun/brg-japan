import axios from 'axios';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    Cookies:
      'aacc=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWJFbWFpbCI6ImFkbWluIiwibWJUeXBlIjoiQURNSU4iLCJhZG1pbkdyYWRlIjowLCJpYXQiOjE2OTA3NzI4OTcsImV4cCI6MTY5MDg1OTI5N30.1CVpT4OPINQgzpi2MvfKLakDKti35z4m_OggfhCl4Dc',
  },
});

export default client;
