import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import firstRelax from "../../images/first-img-relax.jpg";
import { clearErrors, getProductRandom } from "../../actions/productAction";
import secondeRelax from "../../images/second-img-relax.jpg";
import thirstRelax from "../../images/third-img-relax.png";
import "./Spa.css";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";

const Relax = () => {
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
          <MetaData title="Relax Pet" />
          <div className="row-nail-pr">
            <div className="test-scroll-script" onscroll="myFunction()">
              <div className="background-color-all">
                <div className="container">
                  <div className="title-relax">
                    <h1 className="big-title">
                      When your pet is stressed out, what should you do?
                    </h1>
                    <p className="padding-p-relax">
                      Many people still believe that the difference between
                      humans and pets is largely due to emotions. They think
                      that pets like dogs and cats have no feelings, but in
                      fact, this is completely wrong. As everyone knows, dogs
                      are pets that have been domesticated by humans for a long
                      time, they have lived with humans for a long time, so they
                      always tend to want to be closer to their owners. They
                      have feelings, they also know how to distinguish between
                      friends and enemies and of course they can also be
                      "Shocked" when they encounter something. Such “shocks” can
                      cause long-lasting depression that is difficult to treat
                    </p>
                  </div>
                  <div>
                    <h3 className="small-title">
                      When your pet is stressed out, what should you do?
                    </h3>
                    <div className="img-center">
                      <img className="img-respon" src={firstRelax} alt="" />
                      <p className="text-center">Stress in Dogs</p>
                    </div>
                    <p className="padding-p-relax">
                      Pets are often very sensitive to the change of the living
                      environment, such as when they move to a new home or when
                      the house appears a new member. At times like this, our
                      pet will often have some shock signs, often they will
                      become uncomfortable or bite and sad. There are even some
                      cases, pets may vomit, skin rash, diarrhea, stop eating or
                      appetite.
                    </p>
                  </div>
                  <div>
                    <h3 className="small-title">Causes of stress in pets</h3>
                    <div className="img-center">
                      <img className="img-respon" src={secondeRelax} alt="" />
                      <p className="text-center">Stress in Cats</p>
                    </div>
                    <ul>
                      <li>
                        Added or lost a family member: The most common case is
                        that the owner no longer spends much time with them due
                        to being too busy. According to statistics in the UK, an
                        average of 1 in 4 pets suffers from psychological
                        problems because the owner often goes to work and does
                        not spend much time with them. In addition, when the
                        owner's mood is too stressed or stressed, their pets is
                        also affected.
                      </li>
                      <li>
                        When there is a new member in their family: This is also
                        considered one of the most common causes of depression
                        in pets.
                      </li>
                      <li>Moving to a new place.</li>
                      <li>
                        Age-related depression: As your pets gets older, your
                        pets may experience some decline in functional functions
                        such as eating, limping, blurred vision, etc. Because
                        these are important activities that affect quality.
                        Life, so our pets is very susceptible to depression
                        because it can no longer maintain the same rhythm of
                        life as before.
                      </li>
                      <li>
                        Weather-related depression: If you live in areas with
                        extreme weather conditions, your pets is more likely to
                        become depressed if the weather changes for the worse.
                      </li>
                    </ul>
                    <div>
                      <h3 className="small-title">
                        Symptoms of depression in pets
                      </h3>
                      <div className="img-center">
                        <img className="img-respon" src={thirstRelax} alt="" />
                        <p className="text-center">Dog and Cat stress out</p>
                      </div>
                      <ul>
                        <li>
                          Reduce physical activity: Our pets no longer runs
                          around or plays like usual, instead they just curl up
                          and sleep all day.
                        </li>
                        <li>
                          Eating less or even not eating, this can lead to
                          changes in weight and sometimes it will affect their
                          health.
                        </li>
                        <li>
                          Depression can make your pets change his personality,
                          they become lethargic, aggressive and sometimes even
                          pee in the house.
                        </li>
                        <li>
                          Sleep changes: Their abnormal sleep rhythm is also an
                          easy sign to recognize, when stressed they often
                          prefer to sleep during the day and wake up at night.
                        </li>
                        <p>
                          <strong>Note:</strong>
                          <em>
                            It is important to clearly distinguish between
                            symptoms that cause physical and psychological
                            illness, for example, a sad pet that no longer likes
                            to run and jump can also be caused by pain from
                            arthritis.
                          </em>
                        </p>
                      </ul>
                    </div>
                    <div>
                      <h3 className="small-title">
                        6 Proven Ways to Calm Your Anxious pets
                      </h3>
                      <h5 className="small-title">1. Exercise Your Pets</h5>
                      <div className="padding-p-relax">
                        <p>
                          If your pets has separation anxiety, the obvious way
                          to ease their mind is to never leave them alone. That
                          is not a reality for most pet owners, so using
                          exercise as both a bonding time and to tire out your
                          pet is often an easy fix!
                        </p>
                        <p>
                          Because anxiety can cause an excess of energy, taking
                          your pets out to play ball or on a long walk before
                          you leave can be helpful. Providing plenty of physical
                          contacts and talking to them during this time is also
                          beneficial. And, like their human counterparts,
                          exercise can help relieve stress by producing
                          beneficial endorphins.
                        </p>
                      </div>
                      <h5 className="small-title">2. Physical Contact</h5>
                      <p className="padding-p-relax">
                        There is probably nothing more soothing to anxious pets
                        than their owner’s touch. Try to identify the signs of
                        anxiety in your pets and nip them in the bud as early as
                        possible by picking them up, cuddling on the couch, or
                        giving them a good long petting session.
                      </p>
                      <h5 className="small-title">3. Massage</h5>
                      <p className="padding-p-relax">
                        As you probably know, a massage will relax and calm even
                        the most anxious human — did you know it also works
                        wonders with pets as well?! Anxiety often causes tensing
                        of the muscles and massage therapy is one way to
                        alleviate tension. Start at the neck and work downward
                        with long strokes. Try to keep one hand on the pets,
                        while the other works to massage. Over time you may even
                        be able to identify where your pets hold their stress
                        and just work on that one particular area.
                      </p>
                      <h5 className="small-title">4. Music Therapy</h5>
                      <p className="padding-p-relax">
                        Music therapy has been proven to be beneficial for both
                        humans, as well as our canine and feline friends. The
                        power of music can be calming and relaxing while you’re
                        home, in the car, or away from your pet. Music can also
                        alleviate noise sensitivity by blocking the street or
                        scary noises that bothersome pets and create anxiety.
                      </p>
                      <p className="padding-p-relax">
                        Research has shown that many pets prefer classical
                        music. Harp music, often used in hospice situations, can
                        be a natural sedative. You might try:
                      </p>
                      <ul>
                        <li>
                          Through A Dog’s Ear by pianist Lisa Spector and
                          psychoacoustics researcher Joshua Leeds
                        </li>
                        <li>Noah’s Harp: Surrender by Susan Raimond</li>
                      </ul>
                      <h5 className="small-title">5. Time-Out</h5>
                      <p className="padding-p-relax">
                        While anxiety isn’t a bad behavior per se, it can help
                        to give your pets some time-out when they’re acting out.
                        Isolating your pet in a safe and quiet space can help
                        calm their frayed nerves. Maybe that space has some very
                        quiet music playing, low lights, and/or some
                        aromatherapy available
                      </p>
                      <h5 className="small-title">6. Alternative Therapies</h5>
                      <p className="padding-p-relax">
                        While there is limited evidence that alternative
                        products can be of benefit to dogs suffering from
                        anxiety, the products listed below are non-invasive and
                        will cause no harm. They are therapies that can be used
                        alone or combined with those above to be more effective.
                        Be sure to do proper research before implementing
                        alternative therapies, and consult with your
                        veterinarian, too.
                      </p>
                      <h6 className="small-title">Rescue Remedy for Pets</h6>
                      <p className="padding-p-relax">
                        Rescue Remedy is part of the Bach homeopathic line of
                        remedies for humans. Homeopathy was founded over 200
                        years ago and is popular in Europe and England. (The
                        Queen even has her own Royal Homepath.) It is based on
                        the principle of similarity and uses plants and flower
                        in all remedies.
                      </p>
                      <p className="padding-p-relax">
                        Rescue Remedy Pet is comprised of 5 different Bach
                        Flower Remedies that constitute a stress reliever. It is
                        completely safe to use on your dog. You just add 2-4
                        drops directly to their drinking water. There is also a
                        spray that you can use on pet bedding and toys.
                      </p>
                      <p className="padding-p-relax">
                        Note: There are other homeopathic remedies that can be
                        used on pets for specific issues, like constant barking,
                        intolerance toward strangers, or loss of an owner.
                      </p>
                      <h6 className="small-title">Supplements</h6>
                      <p className="padding-p-relax">
                        There are dog treats that contain helpful supplements
                        proven to help anxiety. Typically they will contain
                        melatonin, thiamin, chamomile, L-Theanine or
                        L-tryptophan. Some also have a ginger element to help
                        with sensitive stomachs. These are often recommended for
                        general and travel anxiety.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
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
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Relax;
