declare module "*.json" {
  const value: {
    id: string;
    title: string;
    questions: {
      id: string;
      question: string;
      answer: string;
    }[];
  }[];
  export default value;
}
