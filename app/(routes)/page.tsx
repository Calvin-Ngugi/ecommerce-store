import getBillboard from "@/actions/GetBillboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("b24a54ef-bea9-49a3-9d15-4af6f8a786af");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
