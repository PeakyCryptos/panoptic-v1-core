/**
 * Deploy the TickPriceFeeInfo library.
 * @author Axicon Labs Limited
 * @year 2022
 */
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployTickPriceFeeInfo: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { deployer } = await getNamedAccounts();

  if (process.env.WITH_PROXY) return;

  await deploy("TickPriceFeeInfo", {
    from: deployer,
    log: true,
  });
};

export default deployTickPriceFeeInfo;
deployTickPriceFeeInfo.tags = ["TickPriceFeeInfo"];