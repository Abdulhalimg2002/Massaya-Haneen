import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BookingL, srvicelist } from "@/data";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { bookingS } from "@/validation";
import { useTranslation } from "react-i18next";

// ✅ TypeScript interface متوافقة مع yup
interface BookingFo {
  name: string;
  service: (string | null | undefined)[];
  date: string;
  numberofP: string | null;
}

const BookingModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFo>({
    resolver: yupResolver(bookingS),
    defaultValues: {
      name: "",
      service: [],
      date: "",
      numberofP: null,
    },
  });

  const onSubmit = (data: BookingFo) => {
    const services = data.service.filter((s): s is string => !!s);

    const salonNumber = "905550550573";
    const template = t("booking.messageTemplate");
    const message = template
      .replace("{name}", data.name)
      .replace("{services}", services.map(s => t(s)).join(", "))
      .replace("{date}", data.date)
      .replace("{people}", (data.numberofP || 1).toString());

    const url = `https://wa.me/${salonNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    reset();
    setOpen(false);
  };

  const handleClose = (value: boolean) => {
    if (!value) reset();
    setOpen(value);
  };

  const filteredServices = srvicelist.filter((s) =>
    s.Sname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-[#d7a863] text-white border-none rounded-2xl w-[95%] sm:w-[90%] md:w-[500px] max-h-[90vh] overflow-y-auto p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center mb-4">
            {t("booking.title")}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {BookingL.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <Label
                htmlFor={field.id}
                className="text-white font-semibold text-sm sm:text-base"
              >
                {t(`booking.${field.Label}`)}
              </Label>

              {field.name === "service" ? (
                <>
                  <Input
                    placeholder={t("booking.searchServices")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-white/20 text-white border-white/30 placeholder:text-white/70"
                  />

                  <Controller
                    name="service"
                    control={control}
                    render={({ field }) => (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-2 bg-white/10 rounded-md">
                        {filteredServices.length > 0 ? (
                          filteredServices.map((service, idx) => (
                            <label
                              key={service.Sname + idx}
                              className="flex items-center gap-2 cursor-pointer text-white text-sm sm:text-base"
                            >
                              <input
                                type="checkbox"
                                value={service.Sname}
                                checked={field.value.includes(service.Sname)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    field.onChange([...field.value, service.Sname]);
                                  } else {
                                    field.onChange(
                                      field.value.filter((v) => v !== service.Sname)
                                    );
                                  }
                                }}
                                className="accent-[#3d2f23] w-4 h-4"
                              />
                              <span>{t(service.Sname)}</span>
                            </label>
                          ))
                        ) : (
                          <p className="text-white/70 text-sm col-span-2 text-center">
                            {t("booking.noServicesFound")}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  {errors.service && (
                    <p className="text-red-600 text-sm">{errors.service.message}</p>
                  )}
                </>
              ) : (
                <>
                  <Input
                    id={field.id}
                    {...register(field.name as keyof BookingFo)}
                    type={field.type || "text"}
                    placeholder={t(`booking.${field.name}Placeholder`)}
                    className="bg-white/20 text-white border-white/30 placeholder:text-white/70 text-sm sm:text-base"
                  />

                  {/* ✅ عرض الخطأ فقط إذا لم يكن الحقل "service" */}
                 {(field.name as string) !== "service" &&
  errors[field.name as keyof BookingFo] && (
    <p className="text-red-600 text-sm">
      {errors[field.name as keyof BookingFo]?.message as string}
    </p>
  )}
                </>
              )}
            </div>
          ))}

          <div className="flex flex-col sm:flex-row justify-between mt-6 gap-3 sm:gap-4">
            <Button
              type="submit"
              className="bg-[#3d2f23] hover:bg-[#f4e3c3] hover:text-[#3d2f23] text-white font-semibold w-full sm:w-auto py-2 sm:py-3 text-sm sm:text-base"
            >
              {t("booking.submit")}
            </Button>
            <Button
              type="button"
              onClick={() => handleClose(false)}
              className="bg-red-600 w-full sm:w-auto py-2 sm:py-3 text-sm sm:text-base"
            >
              {t("booking.cancel")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
