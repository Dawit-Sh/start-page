export const getElement = (i: string): Element => document.querySelector(i)
export const getContent = (i: string): string => (<HTMLInputElement>document.querySelector(i)).value
export const getElements = (i: string): NodeList => document.querySelectorAll(i)

export const sleep = (delay: number): Promise<any> => new Promise(resolve => setTimeout(resolve, delay));