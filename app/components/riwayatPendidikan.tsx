import exp from 'constants';

function RowRiwayat (props:any) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-1g ☐ bg-blue-800 p-2 my-5">
      <div className="container mx-auto ">
      <div className="grid grid-cols-12 gap-1 text-white">
      <div className="col-span-12 md:col-span-4 ">{props.jenjang}</div> 
        <div className="col-span-12 md:col-span-4 ">{props.sekolah}</div>
      <div className="col-span-12 md:col-span-4 ">{props.tahun}</div>
      </div>
      </div>
      </div>
      );
  }
  export default function  RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
<h2 className="text-2x1">Riwayat Pendidikan</h2>
<RowRiwayat jenjang="SD" sekolah="SD Bojong Braja" tahun="2009" />
<RowRiwayat jenjang="SMP" sekolah="SMPN 3 Rancaekek" tahun="2015" />
<RowRiwayat jenjang="SMA" sekolah="MAN 2 Bandung " tahun="2018" />
<RowRiwayat jenjang="Diploma" sekolah="Masoem University" tahun="2025" />
<RowRiwayat jenjang="Sarjana" sekolah="Unpad" tahun="2027" />
<RowRiwayat jenjang="Magister" sekolah="Unpad" tahun="2029" />
</div>
);
}
