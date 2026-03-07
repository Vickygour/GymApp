'use client';

import { useEffect, useState } from 'react';

export default function FitnessOnboarding() {
  const [mounted, setMounted] = useState(false);

  const [step, setStep] = useState(1);

  const [goal, setGoal] = useState('build');
  const [gender, setGender] = useState('male');
  const [level, setLevel] = useState('beginner');

  const [age, setAge] = useState(25);
  const [heightType, setHeightType] = useState('ft');
  const [heightFt, setHeightFt] = useState(6);
  const [heightIn, setHeightIn] = useState(0);

  const [weightType, setWeightType] = useState('kg');
  const [weight, setWeight] = useState(72);

  const [activity, setActivity] = useState('high');
  const [meal, setMeal] = useState('nonveg');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const progress = step * 25;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md px-6 py-8">
        {/* Progress */}

        <div className="flex items-center mb-8 gap-4">
          <button
            onClick={prevStep}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow"
          >
            ←
          </button>

          <div className="flex-1">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Profile Setup</span>
              <span>{step}/4</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-blue-500 rounded-full transition-all"
              />
            </div>
          </div>
        </div>

        {/* STEP 1 */}

        {step === 1 && (
          <>
            <h1 className="text-2xl font-bold mb-2">
              What's your fitness mission?
            </h1>

            <p className="text-gray-500 mb-6 text-sm">
              We'll tailor workouts and meal plans based on your goal.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <GoalCard
                title="Lose Fat"
                image="/assets/photo-1634463278803-f9f71890e67d.avif"
                active={goal === 'fat'}
                onClick={() => setGoal('fat')}
              />

              <GoalCard
                title="Build Muscle"
                image="/assets/photo-1532384661798-58b53a4fbe37.avif"
                active={goal === 'build'}
                onClick={() => setGoal('build')}
              />
            </div>

            {/* Gender */}

            <div className="bg-white p-2 rounded-full flex mb-6 shadow-sm">
              <Toggle
                label="Male"
                active={gender === 'male'}
                onClick={() => setGender('male')}
              />

              <Toggle
                label="Female"
                active={gender === 'female'}
                onClick={() => setGender('female')}
              />
            </div>

            <h2 className="text-xl font-semibold mb-4">
              What is your experience level?
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <GoalCard
                title="Beginner"
                image="/assets/photo-1584380844320-f8296a04eabe.avif"
                active={level === 'beginner'}
                onClick={() => setLevel('beginner')}
              />

              <GoalCard
                title="Advanced"
                image="/assets/photo-1621750627159-cf77b0b91aac.avif"
                active={level === 'advanced'}
                onClick={() => setLevel('advanced')}
              />
            </div>
          </>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <>
            <h1 className="text-2xl font-bold mb-2">Let's talk numbers.</h1>

            <p className="text-gray-500 mb-6 text-sm">
              This helps us calculate your metabolism and daily calorie needs.
            </p>

            {/* AGE */}

            <div className="mb-6">
              <label className="font-medium">Age</label>

              <select
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full mt-2 p-3 rounded-xl bg-gray-100"
              >
                {Array.from({ length: 60 }, (_, i) => (
                  <option key={i}>{18 + i}</option>
                ))}
              </select>
            </div>

            {/* HEIGHT */}

            <div className="mb-6">
              <label className="font-medium">Height</label>

              <div className="flex gap-2 mt-2 mb-3">
                <Toggle
                  label="cm"
                  active={heightType === 'cm'}
                  onClick={() => setHeightType('cm')}
                />

                <Toggle
                  label="ft & in"
                  active={heightType === 'ft'}
                  onClick={() => setHeightType('ft')}
                />
              </div>

              {heightType === 'ft' && (
                <div className="flex gap-2">
                  <select
                    value={heightFt}
                    onChange={(e) => setHeightFt(Number(e.target.value))}
                    className="flex-1 p-3 bg-gray-100 rounded-xl"
                  >
                    {[4, 5, 6, 7].map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>

                  <select
                    value={heightIn}
                    onChange={(e) => setHeightIn(Number(e.target.value))}
                    className="flex-1 p-3 bg-gray-100 rounded-xl"
                  >
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* WEIGHT */}

            <div className="mb-8">
              <label className="font-medium">Weight</label>

              <div className="flex gap-2 mt-2 mb-3">
                <Toggle
                  label="kg"
                  active={weightType === 'kg'}
                  onClick={() => setWeightType('kg')}
                />

                <Toggle
                  label="lbs"
                  active={weightType === 'lbs'}
                  onClick={() => setWeightType('lbs')}
                />
              </div>

              <select
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full p-3 bg-gray-100 rounded-xl"
              >
                {Array.from({ length: 150 }, (_, i) => (
                  <option key={i}>{40 + i}</option>
                ))}
              </select>
            </div>
          </>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <>
            <h1 className="text-2xl font-bold mb-2">
              Your Current Health Snapshot
            </h1>

            <p className="text-gray-500 mb-6 text-sm">Based on your profile.</p>

            <BMICard weight={weight} heightFt={heightFt} heightIn={heightIn} />

            <h2 className="text-xl font-semibold mt-6 mb-4">
              How active is your lifestyle?
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <ActivityCard
                title="Sedentary"
                desc="Office job"
                active={activity === 'sedentary'}
                onClick={() => setActivity('sedentary')}
              />

              <ActivityCard
                title="Lightly Active"
                desc="Exercise 1-3 days/week"
                active={activity === 'light'}
                onClick={() => setActivity('light')}
              />

              <ActivityCard
                title="Moderately Active"
                desc="Sports regularly"
                active={activity === 'moderate'}
                onClick={() => setActivity('moderate')}
              />

              <ActivityCard
                title="Highly Active"
                desc="High intensity training"
                active={activity === 'high'}
                onClick={() => setActivity('high')}
              />
            </div>
          </>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <>
            <h1 className="text-2xl font-bold mb-2">
              Fuel your body, your way.
            </h1>

            <p className="text-gray-500 mb-6 text-sm">
              Tell us what you love to eat and we will design it accordingly for
              you.
            </p>

            {/* Meal Preference */}

            <h2 className="text-xl font-semibold mb-4">Meal Preference</h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <FoodCard
                title="Vegetarian"
                image="/assets/photo-1598449426314-8b02525e8733.avif"
                active={meal === 'veg'}
                onClick={() => setMeal('veg')}
              />

              <FoodCard
                title="Non-Vegetarian"
                image="/assets/photo-1633244079780-709af26ae3ad.avif"
                active={meal === 'nonveg'}
                onClick={() => setMeal('nonveg')}
              />
            </div>
          </>
        )}

        {/* Continue Button */}

        <button
          onClick={nextStep}
          className="w-full py-4 rounded-full bg-blue-600 text-white text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

/* COMPONENTS */

function BMICard({ weight, heightFt, heightIn }: any) {
  const heightMeters = ((heightFt * 12 + heightIn) * 2.54) / 100;
  const bmi = weight / (heightMeters * heightMeters);

  let category = 'Healthy';

  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Healthy';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';

  return (
    <div className="bg-white p-6 rounded-2xl shadow text-center">
      <p className="text-gray-500 mb-2">Based on your profile, your BMI is</p>

      <h2 className="text-4xl font-bold text-green-500 mb-2">
        {bmi.toFixed(1)}
      </h2>

      <p className="text-gray-600">
        You fall in the{' '}
        <span className="text-green-600 font-semibold">{category}</span>{' '}
        category
      </p>
    </div>
  );
}

function ActivityCard({ title, desc, active, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className={`p-5 rounded-2xl border text-center cursor-pointer transition ${
        active ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="font-semibold">{title}</div>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}

function FoodCard({ title, image, active, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-2xl border p-3 transition ${
        active ? 'border-blue-500 shadow-md' : 'border-gray-200 bg-white'
      }`}
    >
      <img src={image} className="w-full h-36 object-cover rounded-xl" />

      <p className="text-center mt-3 font-semibold">{title}</p>
    </div>
  );
}

function GoalCard({ title, image, active, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-2xl border p-3 transition ${
        active ? 'border-blue-500 shadow-md' : 'border-gray-200 bg-white'
      }`}
    >
      <img src={image} className="w-full h-36 object-cover rounded-xl" />
      <p className="text-center mt-3 font-semibold">{title}</p>
    </div>
  );
}

function Toggle({ label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3 rounded-full font-medium ${
        active ? 'bg-blue-500 text-white' : 'bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
}


