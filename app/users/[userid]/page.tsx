interface params {
  userid: string;
}

const page = ({ params }: { params: params }) => {
  return (
    <>
      hello
      {params.userid}
    </>
  );
};

export default page;
