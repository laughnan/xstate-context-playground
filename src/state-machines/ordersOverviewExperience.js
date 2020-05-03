import { Machine, assign } from "xstate";

const ordersOverviewExperienceMachine = Machine(
  {
    id: "ordersOverviewExperience",
    initial: "init",
    context: {
      flowName: "ordersOverviewExperience"
    },
    states: {
      init: {
        entry: () => console.log("init"),
        exit: () => console.log("init -- exiting"),
        on: {
          START_IF_ELIGIBLE: {
            target: "seeMoreOrders",
            cond: "canShow"
          },
          SET_ELIGIBLE: {
            actions: assign({
              canShow: () => true
            })
          }
        }
      },
      seeMoreOrders: {
        entry: ["onShow"],
        on: {
          DISMISS_TOOLTIP: {
            target: "ordersMenuItem"
          }
        }
      },
      ordersMenuItem: {
        on: {
          DISMISS_TOOLTIP: {
            target: "completed"
          }
        }
      },
      completed: {
        entry: ["onClose", "onComplete"]
      }
    }
  },
  {
    guards: {
      canShow: (context, event) => context.canShow
    }
  }
);

export default ordersOverviewExperienceMachine;
