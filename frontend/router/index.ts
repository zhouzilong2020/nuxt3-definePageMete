import { NavigationGuardWithThis } from "vue-router";
import { useSearchConfigStore } from "@/stores";
import {
  ChargeType,
  CloudProvider,
  EngineType,
  isValidChargeType,
  isValidCloudProvider,
  isValidEngineType,
  isValidRegion,
  SearchConfig,
  SearchConfigDefault,
  RouteQueryDashBoard,
  RouteQueryCompare,
} from "../types";

// export const router = useRouter();

export const RouteQueryDashBoardDefault: RouteQueryDashBoard = {
  provider: SearchConfigDefault.cloudProvider?.join(","),
  region: SearchConfigDefault.region?.join(","),
  engine: SearchConfigDefault.engineType?.join(","),
  charge: SearchConfigDefault.chargeType?.join(","),
};

// router.beforeEach((to, from, next) => {
//   if (
//     // directly access index page
//     to.fullPath === "/" ||
//     // typed in URL with param
//     from.name ||
//     to.name === "404"
//   ) {
//     next();
//     return;
//   }

//   // no resource
//   if (to.matched.length === 0) {
//     next({ name: "404" });
//     return;
//   }

//   const searchConfigStore = useSearchConfigStore();
//   try {
//     if (to.name === "dashboard") {
//       const query = to.query as RouteQueryDashBoard;
//       const config: SearchConfig = {
//         cloudProvider: query.provider?.split(",") as CloudProvider[],
//         region: query.region?.split(","),
//         chargeType: query.charge?.split(",") as ChargeType[],
//         engineType: query.engine?.split(",") as EngineType[],
//         keyword: query.keyword ? (query.keyword as string) : "",
//         minCPU: query.minCPU ? Number(query.minCPU) : 0,
//         minRAM: query.minRAM ? Number(query.minRAM) : 0,
//         leaseLength: query.lease ? Number(query.lease) : 1,
//         utilization: query.utilization ? Number(query.utilization) : 1,
//       };
//       if (
//         (!config.cloudProvider || isValidCloudProvider(config.cloudProvider)) &&
//         (!config.region || isValidRegion(config.region)) &&
//         (!config.chargeType || isValidChargeType(config.chargeType)) &&
//         (!config.engineType || isValidEngineType(config.engineType))
//       ) {
//         searchConfigStore.searchConfig = config;
//         next();
//         return;
//       }
//     }

//     if (to.name === "compare") {
//       const query = to.query as RouteQueryCompare;
//       if (!query.instance) {
//         next({ name: "404" });
//         return;
//       }
//       next();
//       return;
//     }

//     if (to.name === "provider") {
//       const provider = to.params.provider as string;
//       if (!provider || !isValidCloudProvider([provider])) {
//         next({ name: "404" });
//         return;
//       }

//       searchConfigStore.searchConfig.cloudProvider = [
//         provider as CloudProvider,
//       ];

//       next();
//       return;
//     }

//     if (to.name === "detail") {
//       next();
//       return;
//     }
//   } catch (e) {}

//   // if the query param is invalid or some errors occur, use default setting
//   next({
//     name: "dashboard",
//     replace: true,
//     query: RouteQueryDashBoardDefault,
//   });
//   return;
// });
