import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Crown, MoreVertical, Share2, X } from 'lucide-react'

export default function LevelPage() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-amber-950 to-amber-900 min-h-screen text-white">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <Link href="/">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div className="text-lg">132****1313</div>
        <div className="flex items-center gap-4">
          <X className="w-6 h-6" />
          <MoreVertical className="w-6 h-6" />
        </div>
      </header>

      {/* Level Card */}
      <div className="p-6">
        <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-xl p-6 text-amber-900">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm">132****1313</div>
            <div className="text-sm">我的奖品→</div>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <div className="text-2xl font-bold">五星客户</div>
            <Crown className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="text-amber-500">★</div>
              ))}
            </div>
            <Button size="sm" variant="outline" className="rounded-full">
              <Share2 className="w-4 h-4 mr-1" />
              分享
            </Button>
          </div>
        </div>
      </div>

      {/* Privileges Sections */}
      <div className="px-6">
        <div className="mb-8">
          <h3 className="text-lg mb-4">服务权益</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              "VIP客户经理",
              "营业厅优先办",
              "营业厅预约办",
              "智慧停开机",
              "免费补换卡",
            ].map((item) => (
              <Button
                key={item}
                variant="outline"
                className="bg-amber-100/10 border-amber-100/20 text-amber-100 hover:bg-amber-100/20"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg mb-4">业务权益</h3>
          <div className="grid grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="bg-amber-100/10 border-amber-100/20 text-amber-100 hover:bg-amber-100/20"
            >
              星享换机
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg mb-4">生活权益</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              "星享日活动",
              "生日权益",
              { label: "权益尊享", badge: "超值" },
            ].map((item) => (
              <Button
                key={typeof item === "string" ? item : item.label}
                variant="outline"
                className="bg-amber-100/10 border-amber-100/20 text-amber-100 hover:bg-amber-100/20 relative"
              >
                {typeof item === "string" ? item : item.label}
                {typeof item !== "string" && item.badge && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded">
                    {item.badge}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-amber-950">
        <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700">
          咨询在线客服
        </Button>
      </div>
    </div>
  )
}

