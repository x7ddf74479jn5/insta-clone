import type { NextApiRequest, NextApiResponse } from "next";

export const mockReq = {
  query: {},
  body: "",
  env: {},
  preview: false,
  previewData: {},
} as unknown as NextApiRequest;

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockEnd = jest.fn();
const mockStatus = jest.fn().mockReturnValue({
  end: mockEnd,
  json: mockJson,
});
const mockRedirect = jest.fn();
const mockSetPreviewData = jest.fn();
const mockClearPreviewData = jest.fn();
const mockWriteHead = jest.fn();

export const mockRes = {
  send: mockSend,
  json: mockJson,
  status: mockStatus,
  redirect: mockRedirect,
  setPreviewData: mockSetPreviewData,
  clearPreviewData: mockClearPreviewData,
  writeHead: mockWriteHead,
  end: mockEnd,
} as unknown as NextApiResponse;
