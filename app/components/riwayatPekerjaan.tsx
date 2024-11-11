function RowPekerjaan(props: any) {
    return (
        <div className="border-2 border-indigo-500/75 rounded-lg bg-blue-800 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1 text-white">
                    <div className="col-span-12 md:col-span-4">{props.Sebagai}</div>
                    <div className="col-span-12 md:col-span-4">{props.instansi}</div>
                    <div className="col-span-12 md:col-span-4">{props.tahun}</div>
                </div>
            </div>
        </div>
    );
  }
  
  export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20 text-white">
            <h2 className="text-2xl">Riwayat Pekerjaan</h2>
            <RowPekerjaan Sebagai="Guide" instansi="XXI" tahun="2019" />
            <RowPekerjaan Sebagai="Sales Marketing" instansi="Dealer Honda" tahun="2020" />
            <RowPekerjaan Sebagai="Cutting" instansi="PT.Kahatex" tahun="2021" />
            <RowPekerjaan Sebagai="Administrasi" instansi="Rabbani" tahun="2023" />
        </div>
    );
  }