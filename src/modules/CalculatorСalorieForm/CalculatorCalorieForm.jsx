import { useForm } from "react-hook-form";

import style from "./calculatorСalorieForm.module.scss";

const CalculatorСalorieForm = ({
  title = "Puedes tener tu anuncio aquí, pero nadie te patrocina :(",
  onChange,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      bloodType: "1",
    },
  });

  const watchCurrentWeight = watch("currentWeight");

  const onSubmit = (data) => {
    onChange(data);
    reset();
  };

  return (
    <div className={style.form_wrapper}>
      <h2 className={style.form_title}>{title}</h2>
      <form className={style.form_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.row_wrapper}>
          <div className={style.tablet_input_wrapper}>
            <div className={style.inputs_wrapper}>
              <input
                className={style.input}
                placeholder={"Altura *"}
                {...register("height", {
                  min: { value: 100, message: "La altura mínima es de 100 cm!" },
                  max: { value: 220, message: "La altura máxima es de 220 cm!" },
                  required: "¡Ingresa tu altura! ¡Campo obligatorio!",
                  pattern: {
                    value: /[0-9]{3}/,
                    message: "Caracteres inválidos!",
                  },
                })}
              />
              {errors?.height && (
                <p className={style.error}>{errors?.height?.message}</p>
              )}
            </div>
            <div className={style.inputs_wrapper}>
              <input
                className={style.input}
                placeholder={"Вік *"}
                {...register("age", {
                  min: { value: 18, message: "La edad mínima es 18 años!" },
                  max: { value: 99, message: "La edad máxima es 99 años.!" },
                  required: "¡Introduzca su edad! Campo obligatorio",
                  pattern: {
                    value: /[0-9]{2}/,
                    message: "Caracteres inválidos!",
                  },
                })}
              />
              {errors?.age && (
                <p className={style.error}>{errors?.age?.message}</p>
              )}
            </div>
            <div className={style.inputs_wrapper}>
              <input
                className={style.input}
                placeholder={"Peso actual *"}
                {...register("currentWeight", {
                  min: { value: 40, message: "El peso mínimo es de 40 kg!" },
                  max: { value: 200, message: "El peso máximo es de 200 kg!" },
                  required: "¡Ingresa tu peso! ¡El campo es obligatorio!",
                  pattern: {
                    value: /[0-9]/,
                    message: "Caracteres inválidos!",
                  },
                })}
              />
              {errors?.currentWeight && (
                <p className={style.error}>{errors?.currentWeight?.message}</p>
              )}
            </div>
          </div>
          <div className={style.tablet_input_wrapper}>
            <div className={style.inputs_wrapper}>
              <input
                className={style.input}
                placeholder={"Peso deseado *"}
                {...register("desiredWeight", {
                  min: { value: 40, message: "El peso mínimo deseado es de 40 kg!" },
                  max: {
                    value: 200,
                    message: "El peso máximo deseado es de 200 kg!",
                  },
                  required: "¡Ingrese su peso deseado! Se requiere campo!",
                  pattern: {
                    value: /[0-9]/,
                    message: "Caracteres inválidos!",
                  },
                  validate: (value) =>
                    Number(value) <= Number(watchCurrentWeight) ||
                    "El peso deseado no puede ser mayor que el actual!",
                })}
              />
              {errors?.desiredWeight && (
                <p className={style.error}>{errors?.desiredWeight?.message}</p>
              )}
            </div>
            <div>
              <p className={style.bloodType}>Група крові *</p>
              <div className={style.radioBtns_wrapper}>
                <div className={style.oneRadioBtn_wrapper}>
                  <label className={style.customRadioBtn}>
                    <input
                      type="radio"
                      value={"1"}
                      {...register("bloodType", {
                        required: "¡Elige tu tipo de sangre! Campo necesario!",
                      })}
                    />
                    <span className={style.checkmark}></span>
                  </label>
                  <p className={style.radioBtnText}>1</p>
                </div>
                <div className={style.oneRadioBtn_wrapper}>
                  <label className={style.customRadioBtn}>
                    <input
                      type="radio"
                      value={"2"}
                      {...register("bloodType", {
                        required: "¡Elige tu tipo de sangre! Campo necesario!",
                      })}
                    />
                    <span className={style.checkmark}></span>
                  </label>
                  <p className={style.radioBtnText}>2</p>
                </div>
                <div className={style.oneRadioBtn_wrapper}>
                  <label className={style.customRadioBtn}>
                    <input
                      type="radio"
                      value={"3"}
                      {...register("bloodType", {
                        required: "¡Elige tu tipo de sangre! Campo necesario!",
                      })}
                    />
                    <span className={style.checkmark}></span>
                  </label>
                  <p className={style.radioBtnText}>3</p>
                </div>
                <div className={style.oneRadioBtn_wrapper}>
                  <label className={style.customRadioBtn}>
                    <input
                      type="radio"
                      value={"4"}
                      {...register("bloodType", {
                        required: "¡Elige tu tipo de sangre! Campo necesario!",
                      })}
                    />
                    <span className={style.checkmark}></span>
                  </label>
                  <p className={style.radioBtnText}>4</p>
                </div>
                {errors?.bloodType && (
                  <p className={style.error}>{errors?.bloodType?.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={style.btn_wrapper}>
          <button className={style.button} type="submit" disabled={!isValid}>
            Схуднути!
          </button>
        </div>
      </form>
    </div>
  );
};

export default CalculatorСalorieForm;
