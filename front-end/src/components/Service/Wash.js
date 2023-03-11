import React, { Fragment } from "react";
import washDog1 from "../../images/icon-wash-dog-1.png"
import washDog2 from "../../images/icon-wash-dog-2.png"
import washDog3 from "../../images/icon-wash-dog-3.png"
import MetaData from "../layout/MetaData";

const Wash = () => {
  return (
    <Fragment>
      <MetaData title="Bath Pet" />
      <section className="wash">
        <div className="container">
          <div className="row">
            <div className="list-wash-dog-catton">
              <div className="img-1">
                <img className="list-width" src={washDog1} alt="" />
              </div>
              <div className="img-2">
                <img className="list-width" src={washDog2} alt="" />
              </div>
              <div className="img-3">
                <img className="list-width" src={washDog3} alt="" />
              </div>
            </div>
            <h1 className="big-title">Instructions on how to bath dogs</h1>
            <div className="row-top-wash">
              <div className="row-top-left-wash">
                <div className="top-right-title">
                  <h4 className="petguide-color">Step 1: Preparation stage</h4>
                </div>
                <p className="padding-p">
                  Brush the dog a few times before starting the bath. Make sure
                  there aren't any tangled hairs left. The hairs that are too
                  tangled can be removed by hand or if you want to quickly, they
                  can be cut. You should brush about 2-3 times to remove as much
                  hair loss as possible. Then, put a few drops of eye drops and
                  then insert cotton balls in your ears to protect those two
                  rather sensitive parts from shower gel. If your dog's toenails
                  are too long, you should trim them neatly before bathing. To
                  avoid them struggling hard and scratching your hands while
                  bathing.
                </p>
              </div>
              <div className="row-top-center-wash">
                <div className="top-right-title">
                  <h4 className="petguide-color">Step 2: Wet the dog's coat</h4>
                </div>
                <p className="padding-p">
                  Wet your baby's hair from head to toe. Remember to check the
                  water temperature with your hand before pouring it on him. If
                  possible, use a hand-held sprayer with moderate water
                  pressure. Otherwise, use a faucet or a ladle. But by doing so,
                  the wetting process will take longer. Be careful not to spray
                  water directly into the dog's eyes or ears. Some dogs like:
                  Alaska, Samoyed, Husky, or Corgi all have a waterproof coat
                  that is difficult to get wet. You should use a comb to brush
                  against the direction of hair growth to expose the undercoat.
                  Then rinse with water to make wetting easier.
                </p>
              </div>
              <div className="row-top-right-wash">
                <div className="top-right-title">
                  <h4 className="petguide-color">Step 3: Pour shower gel</h4>
                </div>
                <p className="padding-p">
                  Pour shower gel on the dog's coat. Avoid sensitive areas such
                  as eyes, ears, nose, mouth and genitals. Then apply the shower
                  gel slowly until it foams just enough. If it is a thick shower
                  gel, we should dilute it with water before using it.Do not use
                  shower gel for humans, because there are also acidic baths.
                  This will not be good for dog skin. For dogs with dermatitis,
                  you should use shower gel as directed by the veterinarian. If
                  you choose the wrong type of shower gel that can cause worse
                  disease
                </p>
              </div>
            </div>

            <div className="row-bottom-wash">
              <div className="row-bottom-left-wash">
                <div className="top-right-title">
                  <h4 className="petguide-color">Step 4: Scrub and massage</h4>
                </div>

                <p className="padding-p">
                  Scrub and massage your dog for a few minutes. Scrub the dirty
                  hairs thoroughly. It is best to let the shower gel stay on the
                  hair for 10-15 minutes before rinsing, it will be cleaner.
                  Especially when using medicated shower gels. You can scrub it
                  by hand like washing your hair. Or use a specialized pet brush
                  to help create better foam. Your baby also feels more
                  satisfied when they are massaged in this way.
                </p>
              </div>
              <div className="row-bottom-center-wash">
                <div className="top-right-title">
                  <h4 className="petguide-color">Step 5: Wash the shower gel</h4>
                </div>
                <p className="padding-p">
                  Rinse a small amount of water on the bristles to remove the
                  foam. Rinse thoroughly to push shower gel out of hair. A spray
                  with high water pressure will clean the foam faster than
                  flushing with a mug, cup or bucket. Remember to clean the
                  shower gel in the nooks and crannies of the dog's body. Such
                  as: between toes, between ears, underarms and genitals.
                </p>
              </div>
              <div className="row-bottom-right-wash">
                <div className="top-right-title">
                  <h4 className="petguide-color">Step 6: Dry the coat</h4>
                </div>
                <p className="padding-p">
                  After bathing, stop for a moment to let the dog shake to help
                  reduce the amount of water on the coat. Then, take a towel to
                  dry it to absorb all the excess water on the fur. Usually, it
                  takes 2-3 towels to absorb all the water for dogs with thick
                  coats. Like Poodle Standard or Alaska. To dry your dog's hair
                  quickly and completely, you can use a specialized pet dryer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Wash;
