import React from "react";
import bannerImg1 from "web_modules/images/banner.jpg";
import ps1 from "web_modules/images/ps1.jpg";
import ps2 from "web_modules/images/ps2.jpg";
import ps3 from "web_modules/images/ps3.jpg";

export default class MachineChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { type } = this.props;
    let imgPath = ps1;
    let name = "";
    let content;
    switch (type) {
      case "MachineChoiceWash":
        imgPath = ps1;
        name = "cleaning machine";
        content = (
          <div className="textContent mt30">
            <p className="machineText">How to choose the washing machine?</p>
            <p className="machineText">
              How to choose the washing machine，How to choose the cleaning
              equipment，I believe this is a matter of concern for many
              enterprises. Choosing the right washing products can not only
              greatly improve the efficiency of cleaning work, but also save a
              lot of unnecessary worries and worries for us .So when we choose
              to buy cleaning equipment must be careful, looking for quality and
              brand.
            </p>
            <p className="machineText">
              Question 1: so many styles of washing machine, which one should I
              buy?
            </p>
            <p className="machineText">
              First of all, when we buy the washing machine, remember to be
              greedy.Be sure to put the applicability and the cost performance
              first.
            </p>
            <p className="machineText">
              Secondly, the choice of brand, in the purchase when as much as
              possible choose famous brand products or old manufacturers of
              products.
            </p>
            <p className="machineText">
              Finally, when we feel that we are getting close, please don't rush
              to pay for it. If we have friends who have used the same
              equipment, we can talk to them more privately.
            </p>
            <p className="machineText">
              I recommend determining the type of machine to purchase based on
              the specific area to be cleaned:
            </p>
            <p className="machineText">
              For the clean area below 3000 ㎡-4000 ㎡,a walk behind washing
              machine with a width of 500 mm or so can be used. such as smart
              series.
            </p>
            <p className="machineText">
              For the clean area between 3000 ㎡-6000 ㎡,you should buy
              Self-walking function of washing machine. such as clever series.
            </p>
            <p className="machineText">
              For the clean area between 6000 ㎡-10000 ㎡, you should buy ride-on
              washing machine .Such as Dragoon series.
            </p>
            <p className="machineText">
              Question 2: which is more economical to walk behind washing
              machine or driving washing machine?
            </p>
            <p className="machineText">
              you Still need to make a reasonable choice according to their own
              clean place and budget funds, also need to understand the price of
              the vulnerable parts, calculate long-term cost of use.
            </p>
          </div>
        );
        break;
      case "MachineChoiceSweep":
        imgPath = ps2;
        name = "floor sweeper";
        content = (
          <div className="textContent mt30">
            <p className="machineText">How to buy a sweeping Machine?</p>
            <p className="machineText">
              Consumers face the market in a dazzling array of sweeping machine
              products do not know how to choose, Bennet for everyone to brief
              how to buy sweeping machines for your reference.
            </p>
            <p className="machineText">1.Chassis structure design.</p>
            <p className="machineText">2.Electronic control design.</p>
            <p className="machineText">3.Supplier of spare parts.</p>
            <p className="machineText">
              4.The ability of the manufacturer of the sweeper.
            </p>
            <p className="machineText">5.Product price ratio.</p>
            <p className="machineText">
              6.Service facilities for manufacturers.
            </p>
          </div>
        );
        break;
      case "MachineChoiceRub":
        imgPath = ps3;
        name = "floor polisher";
        content = (
          <div className="textContent mt30">
            <p className="machineText">
              If you want to buy the floor polisher, you need to look at these
              several aspects of key elements, how to choose?These are questions
              that friends of wipe often want to ask, and share these knowledge
              with you today.
            </p>
            <p className="machineText">1.Check the size of floor polisher.</p>
            <p className="machineText">
              2.Choose the normal manufacturer of wipe machine.
            </p>
            <p className="machineText">3.Check the after sales.</p>
          </div>
        );
        break;
      default:
        break;
    }
    return (
      <div className="productServerContainer">
        <p className="title">{`Selection-${name}`}</p>
        <div className="productServerBanner">
          <img src={imgPath} />
        </div>
        {content}
      </div>
    );
  }
}
