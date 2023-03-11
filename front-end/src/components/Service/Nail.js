import React, { Fragment, useEffect } from "react";
import firstNail from "../../images/first-img-nail.jpg";
import secondNail from "../../images/second-img-nail.png";
import { clearErrors, getProductRandom } from "../../actions/productAction";
import thirstNail from "../../images/third-img-nail.png";
import fourNail from "../../images/four-img-nail.png";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";

const Nail = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, productsRandom } = useSelector(
    (state) => state.productsRandom
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductRandom());
  }, [dispatch, error, alert]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Nail Pet" />
          <div className="row-nail-pr">
            <div className="test-scroll-script" onscroll="myFunction()">
              <div className="background-color-all">
                <div className="container">
                  <h1 className="big-title">
                    {" "}
                    Pet nail cutting is not as difficult as you think.
                  </h1>
                  <div>
                    <h5 className="small-title">
                      Steps To Cut Dog Nails At Home & Introducing The Nail
                      Clipper Kit
                    </h5>
                    <p className="padding-p-relax">
                      When raising pet dogs, many owners are only interested in
                      bathing and trimming, but forget that regular <br /> nail
                      clipping is also a necessary job. Dog paws are like
                      humans, they will grow continuously from birth to death.{" "}
                      <br />
                      If you forget to trim, too long nails can make it
                      difficult for your dog to move. Not to mention, if left
                      for a long time, <br />
                      the nail can get into the meat and cause a serious
                      infection.
                    </p>
                    <p className="padding-p-relax">
                      That's why, PetSitter will dedicate the following article
                      to guide you on how to cut your dog's nails at home with a
                      very discounted <br />
                      nail trimming kit
                    </p>
                  </div>
                  <div>
                    <h3 className="small-title">
                      Why is it important to trim the dog's nails so often?
                    </h3>
                    <div className="img-center">
                      <img className="img-respon" src={firstNail} alt="" />
                      <p className="text-center">
                        Dogs should be trimmed regularly
                      </p>
                    </div>
                    <p className="padding-p-relax">
                      Regular dog nail clipping is not only a matter of beauty
                      but also helps protect your dog's health. Some of the
                      reasons
                      <br /> why it is imperative that you trim your dog's nails
                      regularly are as follows:
                    </p>
                    <ul>
                      <li>
                        If left too long, the dog's toenails can break. In some
                        cases, the ingrown nail will pierce the inner flesh
                        causing pain.
                      </li>
                      <li>
                        Nails that are too long will make it difficult for the
                        dog to move. Feet may be deformed, spread toes, broken
                        nails, bleeding,
                        <br /> and discomfort. Over time, the bones of the legs
                        and hips are affected making them unable to walk
                        normally.
                      </li>
                      <li>
                        Long toenails will interfere with the function of the
                        foot pad. In the long term, it affects the bones of the
                        feet and ligaments of the joints.
                      </li>
                      <li>
                        Too long and sharp dog nails can scratch your skin
                        during bathing or trimming.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="small-title">
                      How often should a dog's nails be trimmed?
                    </h3>

                    <p className="padding-p-relax">
                      Dog's toenails grow pretty quickly, so it's usually a good
                      idea to trim or sharpen them at least every 2 weeks.{" "}
                      <br />
                      If you have a lot of free time, you can trim your dog's
                      nails once a week. If possible, you can take your dog to
                      pet spas for nail trimming.
                      <br /> This will make it much cleaner and safer.
                    </p>
                  </div>
                  <div>
                    <h3 className="small-title">Nail clippers</h3>
                    <p className="padding-p-relax">
                      Dog nail clippers require a separate kit because dog nails
                      are very thick and hard. You can not arbitrarily cut them
                      with <br />a pair of scissors or a knife, it will be very
                      dangerous. If you don't have a dedicated dog nail clipper,
                      you can find them at Shop.PettSitter,
                      <br /> which is currently on sale for up to 13%.
                    </p>
                    <div className="img-center">
                      <img className="img-respon" src={secondNail} alt="" />
                      <p className="text-center">
                        Professional dog nail clipper set includes: 1 pliers + 1
                        nail file
                      </p>
                    </div>
                    <ul>
                      <li>
                        Compact but extremely sturdy construction. Sharp blade,
                        can handle nails neatly in just one cut, avoiding pain.
                      </li>
                      <li>
                        Made of stainless steel, so it is durable, has a service
                        life of up to 9-10 years.
                      </li>
                      <li>
                        The handle is made of flexible plastic, soft and smooth,
                        helping you not to hurt your hand when you have to use
                        force.
                      </li>
                      <li>
                        The kit has many different colors, spoiled for you to
                        choose
                      </li>
                      <li>
                        In addition to dogs, you can also use them to trim the
                        nails of cats or other pets, extremely convenient.
                      </li>
                    </ul>
                    <p className="padding-p-relax">
                      Using a nail clipper kit will make the job of making
                      "Nail" for your dog easier and more professional than
                      ever. If you do not own a set like this,
                      <br /> please visit Shop.PettSitter to order it!
                    </p>
                  </div>
                  <div>
                    <h3 className="small-title">Steps to cut dog nails at home</h3>
                    <h4 className="small-title">
                      Note the "pink area" before cutting the dog's nails
                    </h4>
                    <p className="padding-p-relax">
                      The "pink zone" is an area in a dog's paw that contains
                      many blood vessels and nerves. If you accidentally cut
                      this area, <br />
                      it will cause pain and bleeding for the dog. Ideally, you
                      should trim your nails 2-4 mm from the pink area.
                    </p>
                    <div className="img-center">
                      <img className="img-respon" src={thirstNail} alt="" />
                      <p className="text-center">
                        Pay attention to the “Pink Zone” area in the dog's
                        toenail
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="small-title">Steps to cut dog nails</h3>
                    <p className="padding-p-relax">
                      There are many different nail clippers, but there are two
                      simple and most popular ones: square (U-shaped ) and
                      scissors.
                      <br /> If you are just starting to practice cutting, you
                      should choose the scissors cut because it is easier to
                      work, you do not need to press <br />
                      the surface of the pliers to the nail.
                    </p>
                    <div className="img-center">
                      <img className="img-respon" src={fourNail} alt="" style={{ width: "400px", height: "370px"}}/>
                      <p className="text-center">
                        Pay attention to the “Pink Zone” area in the dog's
                        toenail
                      </p>
                    </div>
                    <ol style={{ listStyle: "none" }}>
                      <li className="padding-step-nail">
                        Step 1: Call the dog back and place him on a table level
                        with you in the most comfortable position. If the puppy
                        shows signs of fear, you should ask someone to take care
                        of it. Avoid letting them squirm during the cutting
                        process, it will be very easy to cut into the meat.
                      </li>
                      <li className="padding-step-nail">
                        Step 2: You should start trimming the toenails of the
                        hind legs first. Pick them up gently but firmly. Be
                        careful when lifting the hind legs, avoid turning the
                        legs, which can cause injury.
                      </li>
                      <li className="padding-step-nail">
                        Step 3: Gently push the top of the dog's paw up to
                        expose the nail. Tilt the tip of the pliers about 45
                        degrees and cut off the excess nail. Press the pliers
                        gently but firmly to avoid breaking the dog's nails. Be
                        careful not to cut a blood vessel.
                      </li>
                      <li className="padding-step-nail">
                        Step 4: After cutting, you should use a file to sharpen
                        the nail to reduce the sharpness. Avoid scratching
                        yourself when bathing them.
                      </li>
                      <li className="padding-step-nail">
                        Step 5: Praise your dog when the nail clipping is done
                        well. You can reward them with snacks or a favorite
                        treat to encourage them.
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="small-title">Some notes when cutting nails</h3>
                    <ul>
                      <li>
                        You cannot use a human nail clipper to cut a dog. It can
                        soften the nails, causing pain or injury to the dog.
                      </li>
                      <li>
                        Do not cut nails too short. Because in everyday life,
                        dogs still need nails to create resistance and grip when
                        moving.
                      </li>
                      <li>
                        In order for the nail clipping to go smoothly, you
                        should practice touching the dog's paws often. Rub in
                        between the toes, <br />
                        gently stroke the paws so that the dog is no longer
                        alert, creating absolute trust in the owner.
                      </li>
                      <li>
                        In case the cut accidentally touches the pink area and
                        causes bleeding, quickly cover the bleeding area (can
                        use gauze or powder <br />
                        to stop the bleeding for dogs) and reassure your dog.
                        After a while the bleeding will stop.
                      </li>
                      <li>
                        If you are not confident in your abilities, you should
                        take your puppy to pet spas. The staff here has
                        experience, <br />
                        so the nail clipping will take place quickly, gently,
                        without fear.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="small-title">
                      Harmful myths about cutting dog nails
                    </h3>
                    <h6 className="small-title">
                      Dog's nails don't grow at all or grow very little?
                    </h6>
                    <p className="padding-p-relax">
                      The truth is that dog toenails are just like human nails.
                      It will lengthen continuously from the time they are born
                      until they die. <br />
                      If the claws are too long, the dog will not be able to
                      move quickly because of the pain, the ability to grip the
                      ground will no longer be,
                      <br /> so the running speed will decrease sharply. In some
                      severe cases, long nails can get stuck in the flesh,
                      causing pain and severe infection.
                    </p>
                    <h6 className="small-title">
                      Dog nails don't need to be cut but will wear off on their
                      own?
                    </h6>
                    <p className="padding-p-relax">
                      Today's dogs are almost no longer able to self-abrasive
                      like in the past. The reason may be due to the narrow
                      living space, <br />
                      they rarely run and play, so the foundation does not have
                      the opportunity to rub with the ground to wear it off.
                      Moreover,
                      <br /> most houses today are designed with beautiful
                      smooth brick floors. It's really a nightmare for dogs
                      because the slippery,
                      <br /> does not help them in sharpening their nails.
                    </p>
                    <h6 className="small-title">
                      Will nail clipping cause pain and bleeding for the dog?
                    </h6>
                    <p className="padding-p-relax">
                      Dog nails are similar to human nails, so cutting them will
                      not cause any pain. Except, you cut the blood vessels in
                      the toenail
                      <br /> and cause bleeding. However, it doesn't pose much
                      danger so don't worry too much. When you take care of your
                      dog's nails regularly, <br />
                      you will know where the pink area is and determine a
                      reasonable nail clipping point. From there, completely
                      limit cutting into blood vessels.
                    </p>
                  </div>
                  <div>
                    <h3 className="small-title">Epilogue:</h3>
                    <p className="padding-p-relax">
                      Clipping dog nails is a necessary job to keep the dog
                      clean and healthy. If you know how to cut properly and use
                      a professional kit,
                      <br /> your dog will feel comfortable, happy and
                      pain-free. You can leave a comment below if you have any
                      questions or concerns!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="test-scroll-cart" onscroll="myFunction()">
                <div className="row-shop-item">
                  {productsRandom &&
                    productsRandom.map((product) => (
                      <div className="card">
                        <div className="card-img">
                          <Link to={`/product/${product._id}`}>
                            <img
                              src={product.images[0].url}
                              className="card-img-top"
                              alt={product.name}
                            />
                          </Link>
                        </div>
                        <div className="card-body">
                          <p className="card-text">{product.name}</p>
                          <div className="shop-infor">
                            <Link to={`/product/${product._id}`}>
                              More Info
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Nail;
