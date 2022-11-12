import { useForm } from 'react-hook-form';
import ErrorMsg from '../../components/ui/ErrorMsg';

const Volunteering = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label htmlFor="fullName">الاسم الكامل</label>
      <input
        name="fullName"
        id="fullName"
        type="text"
        placeholder="الاسم الكامل"
        {...register('fullName', { required: true })}
      />
      {errors.fullName && <ErrorMsg msg="الرجاء إدخال الاسم الكامل" />}

      <label htmlFor="phone">رقم الجوال</label>
      <input
        name="phone"
        id="phone"
        type="number"
        placeholder="مثلا 966544223324"
        {...register('phone', { required: true })}
      />
      {errors.phone && <ErrorMsg msg="الرجاء إدخال رقم الجوال" />}

      <label htmlFor="email">البريد الالكتروني</label>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="مثلا user@email.com"
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <ErrorMsg msg="الرجاء إدخال البريد الالكتروني" />}

      <label htmlFor="address">العنوان</label>
      <input
        name="address"
        id="address"
        type="text"
        {...register('address', { required: true })}
      />
      {errors.address && <ErrorMsg msg="الرجاء إدخال العنوان" />}

      <label htmlFor="job">الوظيفة الحالية</label>
      <input
        name="job"
        id="job"
        type="text"
        {...register('job', { required: true })}
      />
      {errors.job && <ErrorMsg msg="الرجاء إدخال الوظيفة الحالية" />}

      <label htmlFor="volunteer">مجال التطوع</label>
      <input
        type="text"
        name="volunteer"
        id="volunteer"
        {...register('volunteer', { required: true })}
      />
      {errors.volunteer && <ErrorMsg msg="الرجاء إدخال مجال التطوع" />}

      <button className="form__btn">ارسال</button>
    </form>
  );
};

export default Volunteering;
