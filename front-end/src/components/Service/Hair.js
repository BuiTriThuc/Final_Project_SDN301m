import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { clearErrors, getProductRandom } from "../../actions/productAction";
import firstsHair from "../../images/first-img-hair.jpg";
import secondHair from "../../images/second-img-hair.jpg";
import "./Spa.css";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";

const Hair = () => {
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
          <div className="row-nail-pr">
            <div className="test-scroll-script" onScroll="myFunction()">
              <div className="background-color-all">
                <div className="container">
                  <div className="row">
                    <div>
                      <h1 className="big-title">
                        Dog Trimming Process at Home
                      </h1>
                      <p className="padding-p-relax">
                        Want to trim your dog's hair at home but not sure what
                        the trimming process will be? Indeed, it is very
                        difficult to trim your own hair <br />
                        at home for those who do not have experience. Here,
                        PetSitter will reveal to you the process of trimming dog
                        hair at home.{" "}
                      </p>
                      <div className="img-center">
                        <img className="img-respon" src={firstsHair} alt="" />
                      </div>
                    </div>
                    <div>
                      <h3 className="small-title">
                        Things to prepare to trim your dog's hair at home
                      </h3>
                      <p className="padding-p-relax">
                        Before trimming the dog's hair, we should prepare all
                        the items to facilitate the process. The tools you need
                        are:
                      </p>
                    </div>
                    <div>
                      <h4 className="small-title">Trimmer:</h4>
                      <p className="padding-p-relax">
                        Trimmers can help you clean up areas of dense hair that
                        scissors can't. With super fast cutting speed and
                        absolute safety, <br />
                        the trimmer will be the right choice for pets in the hot
                        summer.
                      </p>
                      <p className="padding-p-relax">
                        There are two types of trimmer on the market today:
                        corded and cordless. In particular, the wireless type is
                        rated as safer for pets.
                        <br /> It is suitable for beginners to trim dog hair
                        because of its compact, non-entangled design. During the
                        trimming process, it is also easy to change <br />
                        the shaving direction without having to adjust the wire
                        like a corded trimmer.
                      </p>
                    </div>
                    <div>
                      <h4 className="small-title">Comb</h4>
                      <p className="padding-p-relax">
                        You need to comb and detangle the dog's coat before
                        trimming the dog's coat. That's why combs are a
                        must-have in your home. <br />
                        There are many types of combs on the market today.
                        Depending on your dog's coat type, there are appropriate
                        options.
                      </p>
                    </div>
                    <div>
                      <h4 className="small-title">Drag</h4>
                      <p className="padding-p-relax">
                        Do not think that just a normal pair of scissors bought
                        at the market is enough to trim the dog's hair. Dog hair
                        is many times thicker
                        <br /> and denser than human hair. Each type of scissors
                        in the set will have its own function. They are used to
                        take care of different parts of the dog's body.
                      </p>
                      <p className="padding-p-relax">
                        The dog grooming scissors set usually includes the
                        following 3 types:
                      </p>
                      <ul>
                        <li>
                          Straight scissors: used to cut basic hair lines.
                        </li>
                        <li>
                          Curved scissors: to round the coat, making <br />
                          the coat look more natural and soft. For example,
                          <br />
                          if you want to cut and round a puppy's face, you must{" "}
                          <br /> definitely use curved scissors to get the best
                          shape.
                        </li>
                        <li>
                          Serrated scissors: used to thin thick areas of hair.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="small-title">
                        The process of trimming dog hair at home properly
                      </h3>
                      <p className="padding-p-relax">
                        Once you're ready, let's start trimming your baby's
                        hair.
                      </p>
                    </div>
                    <div>
                      <h4 className="small-title">
                        Step 1: Clean hair clippers
                      </h4>
                      <p className="padding-p-relax">
                        The hair clippers are rarely used, but the bacteria on
                        them are not few. You need to wash them before using.
                        <br /> Cleaning your dog's hair clipper not only ensures
                        the beauty of its coat, but also ensures its safety.
                        <br />
                        If you accidentally scratch or tear your dog's skin, the
                        risk of bacterial invasion will be significantly
                        reduced.
                      </p>
                    </div>
                    <div>
                      <h4 className="small-title">
                        Step 2: Brush your dog's coat
                      </h4>
                      <p className="padding-p-relax">
                        Before proceeding with trimming, you need to thoroughly
                        comb all parts of the dog's body to remove loose hair.
                        <br /> At the same time, untangle the sticky hairs so
                        that the trimming process goes smoothly. Brushing before
                        trimming will help you <br /> determine which areas are
                        uneven and the length of hair you need to cut.
                      </p>
                      <p className="padding-p-relax">
                        Brushing the dog's coat should be in the direction of
                        hair growth. That is, from the head down to the tail,{" "}
                        <br />
                        from the shoulder blades down to the feet. Absolutely do
                        not brush backwards, which can cause further tangles.
                        <br />
                        You just brush until the coat is smooth, during the
                        dog's molting period, you should brush about 4-6 times.
                      </p>
                    </div>
                    <div>
                      <h4 className="small-title">Step 3: Fix your dog</h4>
                      <p className="padding-p-relax">
                        While trimming the dog's coat, she kept running around.
                        It's dangerous and frustrating, isn't it? To ensure
                        safety and save time, <br />
                        it is best to use a fixed collar or ask someone to hold
                        it tight during the grooming process.
                      </p>
                      <div className="img-center">
                        <img className="img-respon" src={secondHair} alt="" />
                      </div>
                    </div>
                    <div>
                      <h3 className="small-title">
                        Step 4: Trim the important part first
                      </h3>
                      <p className="padding-p-relax">
                        The later the puppy gets impatient. She may bark more,
                        wiggle more. So, trim the hair in sensitive areas first.
                        That is, hard to do first,
                        <br /> easy to do later. The sequence of hair trimming
                        for pet dogs is as follows:
                        <br />
                        head - armpits - under tail - sides of groin - buttocks
                        - nape - sides of body - abdomen.
                      </p>
                      <p className="padding-p-relax">
                        Some girls and boys are afraid of the noise of the
                        trimmer. So, before trimming your dog's hair, <br />
                        start the trimmer a few dozen seconds in advance to let
                        him get used to it.
                      </p>
                      <p className="padding-p-relax">
                        Trim in long, slow strokes instead of fast and
                        intermittent strokes. Not every dog ​​needs a haircut.
                        <br /> Because fur has the role of keeping warm or
                        preventing sunburn.
                      </p>
                      <p className="padding-p-relax">
                        {" "}
                        Above is the process of trimming dog hair at home.
                        Wishing you success. If you find it really difficult to
                        trim at home,
                        <br /> you can visit Petkingdom for short instruction
                        classes to help you gain more knowledge to take better
                        care of your baby at home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                          <Link to={`/product/${product._id}`}>More Info</Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Hair;
