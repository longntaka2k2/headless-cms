export default function Table() {
  return null;
}
export const getServerSideProps = async ({ res }: any) => {
  const ERROR = {
    code: "NOT_PAGE",
  };

  res.writeHead(400, { "Content-Type": "application/json" });
  res.write(JSON.stringify(ERROR));
  res.end();
  return {};
};
