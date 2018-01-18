import React from "react";
import _ from "lodash";
import { Row, Col } from "antd";
import guzhang from "web_modules/images/guzhang.jpg";

const smartItems = [
  [
    {
      title: "1.INSUFFICIENT WATER ONTO THE BRUSH",
      content: [
        "(1)Make sure the water valve is open.",
        "(2)Confirm there is water in the solution tank."
      ]
    },
    {
      title: "2.THE MACHINE DOES NOT CLEAN SATISFACTORILY",
      content: [
        "Check the condition of the brush and replace it if necessary.The brush should be replace when the bristles reach about 15mm."
      ]
    }
  ],
  [
    {
      title: "3.THE SQUEEGEE DOES NOT DRY THE FLOOR WELL",
      content: [
        "(1)Check that the squeegee rubber are clean.",
        "(2)Adjust the inclination of the squeegee.",
        "(3)Confirm the vacuum hose is correctly fitted in its housing on the recovery tank.",
        "(4)Take off the entire vacuum assembly and clean it.",
        "(5)Replace the blades if worn.",
        "(6)Check that the vaccum motor switch is on.",
        "(7)Check the squeegee height adjustment."
      ]
    }
  ],
  [
    {
      title: "4.EXCESSIVE FOAM PRODUCTION",
      content: [
        "(1)Gheck that a low detergent has been used.If required,add a small quantity of cmtifoam liquid into the  recovery tank.",
        "(2)Remember that more foam is generated when the floor is not very dirty.Use less detergent if this is the case."
      ]
    }
  ]
];

const cleverItems = [
  [
    {
      title: "1.INSUFFICIENT WATER ONTO THE BRUSH",
      content: [
        "(1)Make sure the water valve is open.",
        "(2)Confirm there is water in the solution tank.",
        "(3)Turn on the switch of Solenoid valve."
      ]
    },
    {
      title: "2.THE MACHINE DOES NOT CLEAN SATISFACTORILY",
      content: [
        "Check the condition of the brush and replace it if necessary.The brush should be replace when the bristles reach about 15mm."
      ]
    }
  ],
  [
    {
      title: "3.THE SQUEEGEE DOES NOT DRY THE FLOOR WELL",
      content: [
        "(1)Check that the squeegee rubber are clean.",
        "(2)Adjust the inclination of the squeegee.",
        "(3)Confirm the vacuum hose is correctly fitted in its housing on the recovery tank.",
        "(4)Take off the entire vacuum assembly and clean it.",
        "(5)Replace the rubber if worn.",
        "(6)Check that the vaccum motor switch is on.",
        "(7)Check the squeegee height adjustment."
      ]
    }
  ],
  [
    {
      title: "4.EXCESSIVE FOAM PRODUCTION",
      content: [
        "(1)Check that a low detergent has been used.If required,add a small quantity of antifoam liquid into the recovery tank.",
        "(2)Remember that more foam is generated when the floor is not very dirty.Use less detergent if the case appear."
      ]
    }
  ]
];

const rangerItems = [
  [
    {
      title: "1.THE MACHINE DOES NOT START",
      content: [
        "(1)Make sure the machine connector is connected to the battery connector.",
        "(2)Check the key switch is the &#34On&#34 position.",
        "(3)Check that batteries are charged."
      ]
    },
    {
      title: "2.INSUFFICIENT WATER ON THE BRUSHES",
      content: [
        "(1)Check there is water in the solution tank.",
        "(2)Check that the water tap is turned on.",
        "(3)Clean the solution filter located at the front of the machine.",
        "(4)Check that the solenoid valve is working properly."
      ]
    },
    {
      title: "3.THE SQUEEGEE DOES NOT DRY PERFECTLY",
      content: [
        "(1)Check the squeegee is clean, if necessary, clean it.",
        "(2)Check the regulation of the squeegee.",
        "(3)Clean the entire suction unit.",
        "(4)Replace the rubbers, if worn."
      ]
    },
    {
      title: "4.THE MACHINE DOES NOT CLEAN WELL",
      content: [
        "(1)Check the state of wear and tear of the brushes and, if necessary, replace them.The brushes should be changed when the bristles are about 15mm	long.To replace them，Working with over-worn brushes may cause damage to the floor.",
        "(2)Use a different kind of brush to the one fitted as standard.For cleaning floors where the dirt is particularly resistant, we recommend the use of special brushes supplied upon request and according to needs."
      ]
    }
  ],
  [
    {
      title: "5.EXCESSIVE FOAM PRODUCTION",
      content: [
        "(1)Verify that a low foam detergent has been used.If necessary, add a small quantity of antifoam liquid to	the recovery tank.",
        "(2)Remember that, when the floor is not very dirty, more foam is generated.In this case the detergent solution should be more diluted."
      ]
    },
    {
      title: "6.THE VACUUM MOTOR DOES NOT FUNCTION",
      content: [
        "(1)Check whether the recovery tank is full and, if necessary, empty it.",
        "(2)Check the float switch (1)on the suction cap.",
        "(3)Check whether the suction hose and squeegee nozzle have been clogged up, if necessary, clean them."
      ]
    },
    {
      title: "7.THE BRUSH MOTOR DOES NOT WORK",
      content: [
        "WARNING: To avoid damaging the floor, the motor only starts up when the machine is moved forwards.",
        "(1)Check that the base is lowered during the forward movement with the	right lever turned clockwise.",
        "(2)Check that the base is lowered during the forward movement with the	right lever turned clockwise.",
        "(3)Check no thermal protection device has intervened.",
        "(4)Check the correct connection of the motor to the terminal of power supply	under the footboards."
      ]
    }
  ],
  [
    {
      title: "8.ELECTRIC FUSES AND THERMAL CUT-OUTS",
      content: [
        "In addition to general 80A fuses, the machine is also fitted with restorable	 safety  fuses in the electric system that interrupt the power supply to the brush and suction motors when the machine exceeds the predetermined load.To restore the power supply to the motor, switch off the machine and wait for the fuses to cool down (about 60 seconds), then push the button of the fuse to retore it.If the fuse disconnects the current again, contact the BENNETT technical service centre.",
        "ATTENTION: The restorable safety fuses located on the electric components support below the driver’s seat.Unscrew all the screws, then remove the plastic washers and the cover , you can find them."
      ]
    },
    {
      title: "9.THE MACHINE DOES NOT REVERSE",
      content: [
        "WARNING: To avoid damage to the squeegee, the reverse movement is disabled and only works when the squeegee is lifted.",
        "(1)Check that the squeegee is lifted during the reverse movement with the left lever (1) turned clockwise.",
        "(2)The operator must be properly seated in the driving position.",
        "(3) Check no thermal protection device has intervened."
      ]
    }
  ]
];

const hussarItems = [
  [
    {
      title: "1.THE MACHINE DOES NOT START",
      content: [
        "(1)Make sure the machine connector is connected to the battery connector.",
        "(2)Check the key switch is the &#34On&#34 position.",
        "(3)Check that batteries are charged."
      ]
    },
    {
      title: "2.INSUFFICIENT WATER ON THE BRUSHES",
      content: [
        "(1)Check there is water in the solution tank.",
        "(2)Check that the water tap is turned on.",
        "(3)Clean the solution filter located at the front of the machine.",
        "(4)Check that the solenoid valve is working properly."
      ]
    },
    {
      title: "3.THE SQUEEGEE DOES NOT DRY PERFECTLY",
      content: [
        "(1)Check the squeegee is clean, if necessary, clean it.",
        "(2)Check the regulation of the squeegee.",
        "(3)Clean the entire suction unit.",
        "(4)Replace the rubbers, if worn."
      ]
    },
    {
      title: "4.THE MACHINE DOES NOT CLEAN WELL",
      content: [
        "(1)Check the state of wear and tear of the brushes and, if necessary, replace them.The brushes should be changed when the bristles are about 15mm	long.To replace them，Working with over-worn brushes may cause damage to the floor.",
        "(2)Use a different kind of brush to the one fitted as standard.For cleaning floors where the dirt is particularly resistant, we recommend the use of special brushes supplied upon request and according to needs."
      ]
    }
  ],
  [
    {
      title: "5.EXCESSIVE FOAM PRODUCTION",
      content: [
        "(1)Verify that a low foam detergent has been used.If necessary, add a small quantity of antifoam liquid to	the recovery tank.",
        "(2)Remember that, when the floor is not very dirty, more foam is generated.In this case the detergent solution should be more diluted."
      ]
    },
    {
      title: "6.THE VACUUM MOTOR DOES NOT FUNCTION",
      content: [
        "(1)Check whether the recovery tank is full and, if necessary, empty it.",
        "(2)Check the float switch (1)on the suction cap.",
        "(3)Check whether the suction hose and squeegee nozzle have been clogged up, if necessary, clean them."
      ]
    },
    {
      title: "7.THE BRUSH MOTOR DOES NOT WORK",
      content: [
        "WARNING: To avoid damaging the floor, the motor only starts up when the machine is moved forwards.",
        "(1)Check that the base is lowered during the forward movement with the	right lever turned clockwise.",
        "(2)Check that the base is lowered during the forward movement with the	right lever turned clockwise.",
        "(3)Check no thermal protection device has intervened.",
        "(4)Check the correct connection of the motor to the terminal of power supply	under the footboards."
      ]
    }
  ],
  [
    {
      title: "8.ELECTRIC FUSES AND THERMAL CUT-OUTS",
      content: [
        "In addition to general 80A fuses, the machine is also fitted with restorable	 safety  fuses in the electric system that interrupt the power supply to the brush and suction motors when the machine exceeds the predetermined load.To restore the power supply to the motor, switch off the machine and wait for the fuses to cool down (about 60 seconds), then push the button of the fuse to retore it.If the fuse disconnects the current again, contact the BENNETT technical service centre.",
        "ATTENTION: The restorable safety fuses located on the electric components support below the driver’s seat.Unscrew all the screws, then remove the plastic washers and the cover , you can find them."
      ]
    },
    {
      title: "9.THE MACHINE DOES NOT REVERSE",
      content: [
        "WARNING: To avoid damage to the squeegee, the reverse movement is disabled and only works when the squeegee is lifted.",
        "(1)Check that the squeegee is lifted during the reverse movement with the left lever (1) turned clockwise.",
        "(2)The operator must be properly seated in the driving position.",
        "(3) Check no thermal protection device has intervened."
      ]
    }
  ]
];

const dragoonItems = [
  [
    {
      title: "1.THE MACHINE DOES NOT START",
      content: [
        "(1)Make sure the machine connector is connected to the battery connector.",
        "(2)Check the key switch is the &#34On&#34 position.",
        "(3)Check that batteries are charged."
      ]
    },
    {
      title: "2.INSUFFICIENT WATER ON THE BRUSHES",
      content: [
        "(1)Check there is water in the solution tank.",
        "(2)Check that the water tap is turned on.",
        "(3)Clean the solution filter located at the front of the machine.",
        "(4)Check that the solenoid valve is working properly."
      ]
    },
    {
      title: "3.THE SQUEEGEE DOES NOT DRY PERFECTLY",
      content: [
        "(1)Check the squeegee is clean, if necessary, clean it.",
        "(2)Check the regulation of the squeegee.",
        "(3)Clean the entire suction unit.",
        "(4)Replace the rubbers, if worn."
      ]
    },
    {
      title: "4.THE MACHINE DOES NOT CLEAN WELL",
      content: [
        "(1)Check the state of wear and tear of the brushes and, if necessary, replace them.The brushes should be changed when the bristles are about 15mm	long.To replace them，Working with over-worn brushes may cause damage to the floor.",
        "(2)Use a different kind of brush to the one fitted as standard.For cleaning floors where the dirt is particularly resistant, we recommend the use of special brushes supplied upon request and according to needs."
      ]
    }
  ],
  [
    {
      title: "5.EXCESSIVE FOAM PRODUCTION",
      content: [
        "(1)Verify that a low foam detergent has been used.If necessary, add a small quantity of antifoam liquid to	the recovery tank.",
        "(2)Remember that, when the floor is not very dirty, more foam is generated.In this case the detergent solution should be more diluted."
      ]
    },
    {
      title: "6.THE VACUUM MOTOR DOES NOT FUNCTION",
      content: [
        "(1)Check whether the recovery tank is full and, if necessary, empty it.",
        "(2)Check the float switch (1)on the suction cap.",
        "(3)Check whether the suction hose and squeegee nozzle have been clogged up, if necessary, clean them."
      ]
    },
    {
      title: "7.THE BRUSH MOTOR DOES NOT WORK",
      content: [
        "WARNING: To avoid damaging the floor, the motor only starts up when the machine is moved forwards.",
        "(1)Check that the base is lowered during the forward movement with the	right lever turned clockwise.",
        "(2)Check that the base is lowered during the forward movement with the	right lever turned clockwise.",
        "(3)Check no thermal protection device has intervened.",
        "(4)Check the correct connection of the motor to the terminal of power supply	under the footboards."
      ]
    }
  ],
  [
    {
      title: "8.ELECTRIC FUSES AND THERMAL CUT-OUTS",
      content: [
        "In addition to general 80A fuses, the machine is also fitted with restorable	 safety  fuses in the electric system that interrupt the power supply to the brush and suction motors when the machine exceeds the predetermined load.To restore the power supply to the motor, switch off the machine and wait for the fuses to cool down (about 60 seconds), then push the button of the fuse to retore it.If the fuse disconnects the current again, contact the BENNETT technical service centre.",
        "ATTENTION: The restorable safety fuses located on the electric components support below the driver’s seat.Unscrew all the screws, then remove the plastic washers and the cover , you can find them."
      ]
    },
    {
      title: "9.THE MACHINE DOES NOT REVERSE",
      content: [
        "WARNING: To avoid damage to the squeegee, the reverse movement is disabled and only works when the squeegee is lifted.",
        "(1)Check that the squeegee is lifted during the reverse movement with the left lever (1) turned clockwise.",
        "(2)The operator must be properly seated in the driving position.",
        "(3) Check no thermal protection device has intervened."
      ]
    }
  ]
];

const tornadoItems = [
  [
    {
      title: "1.THE MACHINE DOES NOT START",
      content: [
        "(1)Make sure the machine connector is connected to the battery connector.",
        "(2)Check the key switch is the &#34On&#34 position.",
        "(3)Check that batteries are charged."
      ]
    },
    {
      title: "2.THE MACHINE LIFTS DUST DURING OPERATION",
      content: [
        "(1)THE MACHINE LIFTS DUST DURING OPERATION.",
        "(2)The filter is blocked: clean the filter thoroughly.",
        "(3)The hopper position is not correct, reassemble it."
      ]
    }
  ],
  [
    {
      title: "3.THE MACHINE DOES NOT CLEAN WELL",
      content: [
        "(1) Check the state of wear and tear of the brushes, if necessary, replace them.The brushes should be changed when the bristles are worn more than 30mm.To replace them, Working with over-worn brushes may cause damage to the floor.",
        "(2)Use a different kind of brush to the one fitted as standard.For cleaning	floors where the dirt is particularly resistant, we recommend the use of special brushes supplied upon request and according to needs.",
        "(3)The side brush is worn, adjust it.",
        "(4)The hopper is full, empty it completely."
      ]
    },
    {
      title: "4.EXCESSIVE OR ALTERED NOISE OF THE CENTRAL BRUSH",
      content: [
        "WARNING: To avoid damaging the floor, the motor only starts up when the machine is moved forwards and backwards.",
        "(1)Material wrapped around the brush: remove it."
      ]
    },
    {
      title: "5.EXCESSIVE OR ALTERED NOISE OF THE SIDE BRUSH",
      content: ["(1)Material wrapped around the brush: remove it."]
    }
  ],
  [
    {
      title: "6.ELECTRIC FUSES AND THERMAL CUT-OUTS",
      content: [
        "In addition to general 80A fuses, the machine is also fitted with restorable	 safety fuses in the electric system that interrupt the power supply to the brush and suction motors when the machine exceeds the predetermined load.To restore the power supply to the motor, switch off the machine and wait for the fuses to cool down (about 60 seconds), then push the button of the fuse to retore it.If the fuse disconnects the current again, contact the BENNETT technical service centre.",
        "(1)Grip the handle to open the storage compartment door, the restorable safety fuses located on the roof of storage compartment.",
        "(2)Grip the rear part of the seat tank and lift the seat tank until it hooks to	its safety clamp, the restorable safety fuses located on the right side of the batteries."
      ]
    }
  ]
];

const pxspxItems = [
  [
    {
      title: "1.The phenomenon of jitter in equipment use",
      content: [
        "(1)The use of the machine will shake when the ground is uneven；It is recommended that customers use the equipment on a flat surface to avoid damage to the motor.",
        "(2)The bristles of the brush bend, causing the equipment to to shake when used; It is suggested that the client will remove the brush after use to avoid long time being extruded by the equipment causing the bristles to deform."
      ]
    }
  ],
  [
    {
      title: "2.A trip occurs after a period of use",
      content: [
        "(1)Operation of capacitor damage to cause the device to tripping; It is suggested that when cleaning the outer layer of the equipment, the staff can not wash directly with water or cause the equipment to fail after the running capacitor is flooded.Just wipe it with a cloth.",
        "(2)Poor contact of power cord leads to equipment trip;It is suggested that the power line be hung on the shoulder of the user when the device is used, so as not to cause the power cord to be in contact with the equipment connection due to the pulling of the power cord."
      ]
    }
  ]
];

/*
 * 常见故障
 * */

export default class Malfunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: smartItems
    };
  }

  componentDidMount() {
    const { type } = this.props;
    this.getItem(type);
  }

  componentWillReceiveProps(Props) {
    if (Props.type !== this.props.type) {
      const { type } = Props;
      this.getItem(type);
    }
  }

  getItem = type => {
    switch (type) {
      case "MalfunctionSmart":
        this.setState({
          items: smartItems
        });
        break;
      case "MalfunctionClever":
        this.setState({
          items: cleverItems
        });
        break;
      case "MalfunctionRanger":
        this.setState({
          items: rangerItems
        });
        break;
      case "MalfunctionHussar":
        this.setState({
          items: hussarItems
        });
        break;
      case "MalfunctionDragoon":
        this.setState({
          items: dragoonItems
        });
        break;
      case "MalfunctionTornado":
        this.setState({
          items: tornadoItems
        });
        break;
      case "MalfunctionPX&SPX":
        this.setState({
          items: pxspxItems
        });
        break;
    }
  };

  render() {
    const { items } = this.state;
    const content = [];
    items.map((item, indexs) => {
      const lists = [];
      item.map((it, index) => {
        let lisItem = [];
        if (it.hasOwnProperty("content")) {
          const list = [];
          it.content.map((i, ind) => {
            list.push(
              <p
                className={
                  ind === it.content.length - 1 && index < item.length - 1
                    ? "mb20"
                    : ""
                }
                key={`${it.title}-${index}-${ind}`}
              >
                {i}
              </p>
            );
          });
          list.unshift(
            <p key={it.title} className="textWeight">
              {it.title}
            </p>
          );
          lisItem = list;
        }
        lists.push(lisItem);
      });
      content.push(
        <Col key={indexs} span={8} className="malfunctionItem">
          {lists}
        </Col>
      );
    });
    return (
      <div className="productServerContainer">
        <div className="productServerBanner">
          <img src={guzhang} />
        </div>
        <div className="textContent">
          <p className="title">
            {this.props.type.slice(11)} Series Common Fault Analysis：
          </p>
          <Row className="malfunction">{content}</Row>
        </div>
      </div>
    );
  }
}
