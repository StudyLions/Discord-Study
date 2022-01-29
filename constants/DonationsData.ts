const defaultDonationImage = "/../public/images/StudyLion_1.png"

export const DonationsData = [
  {
    amount: 1,
    tokens: 300,
    tokens_bonus: 0,
    image: defaultDonationImage
  },
  {
    amount: 4.99,
    tokens: 1500,
    tokens_bonus: 150,
    image: defaultDonationImage
  },
  {
    amount: 14.99,
    tokens: 4500,
    tokens_bonus: 600,
    image: defaultDonationImage
  },
  {
    amount: 29.99,
    tokens: 9000,
    tokens_bonus: 1500,
    image: defaultDonationImage
  },
  {
    amount: 49.99,
    tokens: 15000,
    tokens_bonus: 3000,
    image: defaultDonationImage
  },
  {
    amount: 99.99,
    tokens: 30000,
    tokens_bonus: 7000,
    image: defaultDonationImage
  },
]

export const SubscriptionsData = [
  {
    typePlan: "Monthly plan",
    amount: 11.95,
    billedFrequency: "Billed every month",
    benefits: [
      "Fully refundable for 7 days",
      "Transferable to another server"
    ],
    buttonText: "Get the Monthly plan"
  },
  {
    tag: "MOST POPULAR",
    typePlan: "Lifetime plan",
    amount: 89.90,
    billedFrequency: "Single payment",
    benefits: [
      "Fully refundable for 7 days",
      "benef 2",
      "benef 3",
      "benef 4",
      "benef 5",
    ],
    buttonText: "Get the Lifetime plan"
  },
  {
    tag: "SAVE 65%",
    typePlan: "Yearly plan",
    amount: 49.99,
    billedFrequency: "Billed every year",
    benefits: [
      "Fully refundable for 7 days",
      "benef yearly plan",
    ],
    buttonText: "Get the Yearly plan"
  }
]
