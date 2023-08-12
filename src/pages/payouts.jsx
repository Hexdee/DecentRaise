import { useState } from "react";
import { Button } from "../components/ui/button";
import AuthLayout from "../layout";
import CreateProjectLevel from "../layout/create-project-level";
import TextInput from "../ui/text-input";
import { useNavigate } from "react-router-dom";

const PayoutsPage = () => {
  const navigate = useNavigate();
  const [payoutAddress, setPayoutAddress] = useState('');
  const [amount, setAmout] = useState('');
  return (
    <AuthLayout>
      <div className="mt-8 px-[400px]">
        <h1 className="underline underline-offset-8 text-center">
          Create a project
        </h1>
        <CreateProjectLevel />
        <div className="mt-14">
          <h1 className="font-bold text-[22px]">Payouts</h1>
          <p className="text-[12px] mt-2 pr-12">
            Pay out ETH from your project to the Ethereum wallets or Juicebox
            projects of your choice. ETH which isn&apos;t paid out will be available
            for token redemptions, or for use in future cycles. Payouts reset
            each cycle.
          </p>

          <div className="mt-8 border border-fuchsia-500 rounded-lg p-4">
            <h1 className="font-bold">Payout recipients</h1>
            <p className="text-xs mt-2">Add wallet addresses to your Decentraise projects to receive payouts.</p>

            <form>
              <TextInput
                name="duation"
                label="Wallet Address"
                type="text"
                placeholder="00xxxxxxxxx"
                value={payoutAddress}
                onChange={({ target }) => setPayoutAddress(target.value)}
              />
              <p className="text-xs mt-2">Fill your payouts wallet address to the input field or connect your wallet</p>
              <Button className="bg-fuchsia-500 px-12 w-full mt-8">Add payout wallet +</Button>

              <TextInput
                name="amount"
                label="Amount to payout"
                type="number"
                placeholder="100"
                value={amount}
                onChange={({ target }) => setAmout(target.value)}
              />
              <p className="text-xs mt-2">Input the amout you want to withdraw</p>
            </form>
          </div>

          <div className="justify-between w-full flex my-8">
            <Button className="bg-transparent border border-fuchsia-500 px-12" onClick={() => navigate(-1)}>
              Back
            </Button>
            <Button className="bg-fuchsia-500 px-12" disabled={!payoutAddress || !amount}>Next</Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default PayoutsPage;
