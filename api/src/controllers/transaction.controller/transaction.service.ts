import prisma from "../../../prisma/prisma"

export const handleTransfer = async(fromAccountId: number, toAccountId: number, amount: number) => {
    if (amount <= 0) {
        throw new Error("Transfer amount must be positive");
    }

    const [fromAccount, toAccount] = await prisma.$transaction([
    prisma.account.findUnique({ where: { account_id: fromAccountId } }),
    prisma.account.findUnique({ where: { account_id: toAccountId } })
    ]);

    if (!fromAccount || !toAccount) {
        throw new Error("One or both accounts not found");
    }
    
      if (fromAccount.balance < amount) {
        throw new Error("Insufficient funds in the source account");
    }

    await prisma.$transaction([
        prisma.account.update({
          where: { account_id: fromAccountId },
          data: { balance: { decrement: amount } }
        }),
        prisma.account.update({
          where: { account_id: toAccountId },
          data: { balance: { increment: amount } }
        })
    ]);
    
    return true;
}